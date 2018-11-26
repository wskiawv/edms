'use strict';

/**
 * Config for the router
 */
angular.module('app')
  .run(
    [          '$rootScope', '$state', '$stateParams',
      function ($rootScope,   $state,   $stateParams) {
          $rootScope.$state = $state;
          $rootScope.$stateParams = $stateParams;        
      }
    ]
  )
  .config(
    [          '$stateProvider', '$urlRouterProvider',
      function ($stateProvider,   $urlRouterProvider) {
          
          $urlRouterProvider
              .otherwise('/index');
          $stateProvider
	          .state('index', {	              
	              url: '/index',
	              templateUrl: 'admin/tpl/app.html'
	              
	          }) 	
              .state('app', {
                  abstract: true,
                  url: '/app',
                  templateUrl: 'admin/tpl/app.html'
              })
              .state('app.dashboard-v1', {
                  url: '/dashboard-v1',
                  templateUrl: 'admin/tpl/app_dashboard_v1.html',
                  resolve: {
                    deps: ['$ocLazyLoad',
                      function( $ocLazyLoad ){
                        return $ocLazyLoad.load(['admin/js/app/chart.js']);
                    }]
                  }
              })
              .state('app.dashboard-v2', {
                  url: '/dashboard-v2',
                  templateUrl: 'admin/tpl/app_dashboard_v2.html',
                  resolve: {
                    deps: ['$ocLazyLoad',
                      function( $ocLazyLoad ){
                        return $ocLazyLoad.load(['admin/js/app/chart.js']);
                    }]
                  }
              })
              .state('app.ui', {
                  url: '/ui',
                  template: '<div ui-view class="fade-in-up"></div>'
              })
              .state('app.ui.buttons', {
                  url: '/buttons',
                  templateUrl: 'admin/tpl/ui_buttons.html'
              })
              .state('app.ui.icons', {
                  url: '/icons',
                  templateUrl: 'admin/tpl/ui_icons.html'
              })
              .state('app.ui.grid', {
                  url: '/grid',
                  templateUrl: 'admin/tpl/ui_grid.html'
              })
              .state('app.ui.widgets', {
                  url: '/widgets',
                  templateUrl: 'admin/tpl/ui_widgets.html'
              })          
              .state('app.ui.bootstrap', {
                  url: '/bootstrap',
                  templateUrl: 'admin/tpl/ui_bootstrap.html',
                  resolve: {
                      deps: ['uiLoad',
                        function( uiLoad){
                          return uiLoad.load('admin/js/app/bootstrap.js');
                      }]
                  }
              })
              .state('app.ui.sortable', {
                  url: '/sortable',
                  templateUrl: 'admin/tpl/ui_sortable.html'
              })
              .state('app.ui.portlet', {
                  url: '/portlet',
                  templateUrl: 'admin/tpl/ui_portlet.html'
              })
              .state('app.ui.timeline', {
                  url: '/timeline',
                  templateUrl: 'admin/tpl/ui_timeline.html'
              })
              .state('app.ui.tree', {
                  url: '/tree',
                  templateUrl: 'admin/tpl/ui_tree.html',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad ){
                          return $ocLazyLoad.load('angularBootstrapNavTree').then(
                              function(){
                                 return $ocLazyLoad.load('admin/js/app/tree.js');
                              }
                          );
                        }
                      ]
                  }
              })
              .state('app.ui.toaster', {
                  url: '/toaster',
                  templateUrl: 'admin/tpl/ui_toaster.html',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad){
                          return $ocLazyLoad.load('toaster').then(
                              function(){
                                 return $ocLazyLoad.load('admin/js/app/toaster.js');
                              }
                          );
                      }]
                  }
              })
              .state('app.ui.jvectormap', {
                  url: '/jvectormap',
                  templateUrl: 'admin/tpl/ui_jvectormap.html',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad){
                          return $ocLazyLoad.load('admin/js/app/vectormap.js');
                      }]
                  }
              })
              .state('app.ui.googlemap', {
                  url: '/googlemap',
                  templateUrl: 'admin/tpl/ui_googlemap.html',
                  resolve: {
                      deps: ['uiLoad',
                        function( uiLoad ){
                          return uiLoad.load( [
                            'admin/js/app/map/load-google-maps.js',
                            'admin/js/app/map/ui-map.js',
                            'admin/js/app/map/map.js'] ).then(
                              function(){
                                return loadGoogleMaps(); 
                              }
                            );
                      }]
                  }
              })
              .state('app.chart', {
                  url: '/chart',
                  templateUrl: 'admin/tpl/ui_chart.html',
                  resolve: {
                      deps: ['uiLoad',
                        function( uiLoad){
                          return uiLoad.load('admin/js/app/chart.js');
                      }]
                  }
              })
              // table
              .state('app.table', {
                  url: '/table',
                  template: '<div ui-view></div>'
              })
              .state('app.table.static', {
                  url: '/static',
                  templateUrl: 'admin/tpl/table_static.html'
              })
              .state('app.table.datatable', {
                  url: '/datatable',
                  templateUrl: 'admin/tpl/table_datatable.html'
              })
              .state('app.table.footable', {
                  url: '/footable',
                  templateUrl: 'admin/tpl/table_footable.html'
              })
              .state('app.table.grid', {
                  url: '/grid',
                  templateUrl: 'admin/tpl/table_grid.html',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad ){
                          return $ocLazyLoad.load('ngGrid').then(
                              function(){
                                  return $ocLazyLoad.load('admin/js/app/grid.js');
                              }
                          );
                      }]
                  }
              })
              //sys
              .state('app.sys', {
                  url: '/sys',
                  template: '<div ui-view></div>'
              })
              .state('app.sys.user', {
                  url: '/user',
                  templateUrl: 'admin/tpl/sys/user.html',
                  resolve: {
                    deps: ['$ocLazyLoad',
                           function( $ocLazyLoad ){

                             var modules=$ocLazyLoad.load(['ngGrid','toaster','textAngular']).then(
                                     function(){
                                         return $ocLazyLoad.load('admin/js/app/sys/UserCtrl.js');
                                     }
                                 );
                             return modules;
                     }]
                  }
              })
              .state('app.sys.role', {
                    url: '/role',
                    templateUrl: 'admin/tpl/sys/role.html',
                    resolve: {
                      deps: ['$ocLazyLoad',
                             function( $ocLazyLoad ){

                               var modules=$ocLazyLoad.load(['ngGrid','toaster','textAngular']).then(
                                       function(){
                                           return $ocLazyLoad.load('admin/js/app/sys/RoleCtrl.js');
                                       }
                                   );
                               return modules;
                       }]
                    }
              })
               .state('app.sys.contact', {
                      url: '/contact',
                      templateUrl: 'admin/tpl/sys/contact.html',
                      resolve: {
                        deps: ['$ocLazyLoad',
                               function( $ocLazyLoad ){

                                 var modules=$ocLazyLoad.load(['ngGrid','toaster','textAngular']).then(
                                         function(){
                                             return $ocLazyLoad.load('admin/js/app/sys/ContactCtrl.js');
                                         }
                                     );
                                 return modules;
                         }]
                      }
                })
              //company
              .state('app.company', {
                  url: '/company',
                  template: '<div ui-view></div>'
              })
              .state('app.company.company', {
                  url: '/company',
                  templateUrl: 'admin/tpl/company/company.html',
                  resolve: {
                    deps: ['$ocLazyLoad',
                           function( $ocLazyLoad ){

                             var modules=$ocLazyLoad.load(['ngGrid','toaster','textAngular']).then(
                                     function(){
                                         return $ocLazyLoad.load('admin/js/app/company/CompanyCtrl.js');
                                     }
                                 );
                             return modules;
                     }]
                  }
             })
              .state('app.company.customer', {
                    url: '/customer',
                    templateUrl: 'admin/tpl/company/customer.html',
                    resolve: {
                      deps: ['$ocLazyLoad',
                             function( $ocLazyLoad ){

                               var modules=$ocLazyLoad.load(['ngGrid','toaster','textAngular']).then(
                                       function(){
                                           return $ocLazyLoad.load('admin/js/app/company/CustomerCtrl.js');
                                       }
                                   );
                               return modules;
                       }]
                    }
               })
               .state('app.company.agent', {
                       url: '/agent',
                       templateUrl: 'admin/tpl/company/agent.html',
                       resolve: {
                         deps: ['$ocLazyLoad',
                                function( $ocLazyLoad ){

                                  var modules=$ocLazyLoad.load(['ngGrid','toaster','textAngular']).then(
                                          function(){
                                              return $ocLazyLoad.load('admin/js/app/company/AgentCtrl.js');
                                          }
                                      );
                                  return modules;
                          }]
                       }
                  })
                .state('app.company.project', {
                   url: '/project',
                   templateUrl: 'admin/tpl/company/project.html',
                   resolve: {
                     deps: ['$ocLazyLoad',
                            function( $ocLazyLoad ){

                              var modules=$ocLazyLoad.load(['ngGrid','toaster','textAngular']).then(
                                      function(){
                                          return $ocLazyLoad.load('admin/js/app/company/ProjectCtrl.js');
                                      }
                                  );
                              return modules;
                      }]
                   }
              })
               .state('app.company.contactPeople', {
                      url: '/contactPeople',
                      templateUrl: 'admin/tpl/company/contactPeople.html',
                      resolve: {
                        deps: ['$ocLazyLoad',
                               function( $ocLazyLoad ){

                                 var modules=$ocLazyLoad.load(['ngGrid','toaster','textAngular']).then(
                                         function(){
                                             return $ocLazyLoad.load('admin/js/app/company/ContactPeopleCtrl.js');
                                         }
                                     );
                                 return modules;
                         }]
                      }
                 })
               .state('app.company.department', {
                   url: '/department',
                   templateUrl: 'admin/tpl/company/department.html',
                   resolve: {
                     deps: ['$ocLazyLoad',
                            function( $ocLazyLoad ){

                              var modules=$ocLazyLoad.load(['ngGrid','toaster','textAngular']).then(
                                      function(){
                                          return $ocLazyLoad.load('admin/js/app/company/DepartmentCtrl.js');
                                      }
                                  );
                              return modules;
                      }]
                   }
               })
               .state('app.company.employee', {
                     url: '/employee',
                     templateUrl: 'admin/tpl/company/employee.html',
                     resolve: {
                         deps: ['$ocLazyLoad',
                           function( $ocLazyLoad ){
                             var modules=$ocLazyLoad.load(['ngGrid','toaster','textAngular']).then(
                                    function(){
                                        return $ocLazyLoad.load('admin/js/app/company/EmployeeCtrl.js');
                                    }
                                );
                            return modules;
                         }]
                     }
               })
              .state('app.company.news', {
                  url: '/news',
                  templateUrl: 'admin/tpl/company/news.html',
                  resolve: {                	
		              deps: ['$ocLazyLoad',
		                     function( $ocLazyLoad ){		            	  	   
		            	  	   
		            	  	   var modules=$ocLazyLoad.load(['ngGrid','toaster','textAngular']).then(
			                           function(){
			                               return $ocLazyLoad.load('admin/js/app/company/NewsCtrl.js');
			                           }
			                       );		            	  	               	  	 
		                       return modules;
		               }]                      
                  }
              })
              .state('app.company.position', {
                    url: '/position',
                    templateUrl: 'admin/tpl/company/position.html',
                    resolve: {
                      deps: ['$ocLazyLoad',
                             function( $ocLazyLoad ){

                               var modules=$ocLazyLoad.load(['ngGrid','toaster','textAngular']).then(
                                       function(){
                                           return $ocLazyLoad.load('admin/js/app/company/PositionCtrl.js');
                                       }
                                   );
                               return modules;
                       }]
                    }
                })
                .state('app.company.product', {
                    url: '/product',
                    templateUrl: 'admin/tpl/company/product.html',
                    resolve: {
                      deps: ['$ocLazyLoad',
                             function( $ocLazyLoad ){

                               var modules=$ocLazyLoad.load(['ngGrid','toaster','textAngular']).then(
                                       function(){
                                           return $ocLazyLoad.load('admin/js/app/company/ProductCtrl.js');
                                       }
                                   );
                               return modules;
                       }]
                    }
                })
                .state('app.company.solution', {
                    url: '/solution',
                    templateUrl: 'admin/tpl/company/solution.html',
                    resolve: {
                      deps: ['$ocLazyLoad',
                             function( $ocLazyLoad ){

                               var modules=$ocLazyLoad.load(['ngGrid','toaster','textAngular']).then(
                                       function(){
                                           return $ocLazyLoad.load('admin/js/app/company/SolutionCtrl.js');
                                       }
                                   );
                               return modules;
                       }]
                    }
                })
              // form
              .state('app.form', {
                  url: '/form',
                  template: '<div ui-view class="fade-in"></div>',
                  resolve: {
                      deps: ['uiLoad',
                        function( uiLoad){
                          return uiLoad.load('admin/js/app/form.js');
                      }]
                  }
              })
              .state('app.form.elements', {
                  url: '/elements',
                  templateUrl: 'admin/tpl/form_elements.html'
              })
              .state('app.form.validation', {
                  url: '/validation',
                  templateUrl: 'admin/tpl/form_validation.html'
              })
              .state('app.form.wizard', {
                  url: '/wizard',
                  templateUrl: 'admin/tpl/form_wizard.html'
              })
              .state('app.form.fileupload', {
                  url: '/fileupload',
                  templateUrl: 'admin/tpl/form_fileupload.html',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad){
                          return $ocLazyLoad.load('angularFileUpload').then(
                              function(){
                                 return $ocLazyLoad.load('admin/js/app/file-upload.js');
                              }
                          );
                      }]
                  }
              })
              .state('app.form.imagecrop', {
                  url: '/imagecrop',
                  templateUrl: 'admin/tpl/form_imagecrop.html',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad){
                          return $ocLazyLoad.load('ngImgCrop').then(
                              function(){
                                 return $ocLazyLoad.load('admin/js/app/imgcrop.js');
                              }
                          );
                      }]
                  }
              })
              .state('app.form.select', {
                  url: '/select',
                  templateUrl: 'admin/tpl/form_select.html',
                  controller: 'SelectCtrl',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad ){
                          return $ocLazyLoad.load('ui.select').then(
                              function(){
                                  return $ocLazyLoad.load('admin/js/app/select.js');
                              }
                          );
                      }]
                  }
              })
              .state('app.form.slider', {
                  url: '/slider',
                  templateUrl: 'admin/tpl/form_slider.html',
                  controller: 'SliderCtrl',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad ){
                          return $ocLazyLoad.load('vr.directives.slider').then(
                              function(){
                                  return $ocLazyLoad.load('admin/js/app/slider.js');
                              }
                          );
                      }]
                  }
              })
              .state('app.form.editor', {
                  url: '/editor',
                  templateUrl: 'admin/tpl/form_editor.html',
                  controller: 'EditorCtrl',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad ){
                          return $ocLazyLoad.load('textAngular').then(
                              function(){
                                  return $ocLazyLoad.load('admin/js/app/editor.js');
                              }
                          );
                      }]
                  }
              })
              // pages
              .state('app.page', {
                  url: '/page',
                  template: '<div ui-view class="fade-in-down"></div>'
              })
              .state('app.page.profile', {
                  url: '/profile',
                  templateUrl: 'admin/tpl/page_profile.html'
              })
              .state('app.page.post', {
                  url: '/post',
                  templateUrl: 'admin/tpl/page_post.html'
              })
              .state('app.page.search', {
                  url: '/search',
                  templateUrl: 'admin/tpl/page_search.html'
              })
              .state('app.page.invoice', {
                  url: '/invoice',
                  templateUrl: 'admin/tpl/page_invoice.html'
              })
              .state('app.page.price', {
                  url: '/price',
                  templateUrl: 'admin/tpl/page_price.html'
              })
              .state('app.docs', {
                  url: '/docs',
                  templateUrl: 'admin/tpl/docs.html'
              })
              // others
              .state('lockme', {
                  url: '/lockme',
                  templateUrl: 'admin/tpl/page_lockme.html'
              })
              .state('access', {
                  url: '/access',
                  template: '<div ui-view class="fade-in-right-big smooth"></div>'
              })
              .state('access.signin', {
                  url: '/signin',
                  templateUrl: 'admin/tpl/page_signup.html',
                  resolve: {
                      deps: ['uiLoad',
                        function( uiLoad ){
                          return uiLoad.load( ['admin/js/app/signin.js'] );
                      }]
                  }
              })
              .state('access.signup', {
                  url: '/signup',
                  templateUrl: 'admin/tpl/page_signup.html',
                  resolve: {
                      deps: ['uiLoad',
                        function( uiLoad ){
                          return uiLoad.load( ['admin/js/app/signup.js'] );
                      }]
                  }
              })
              .state('access.forgotpwd', {
                  url: '/forgotpwd',
                  templateUrl: 'admin/tpl/page_forgotpwd.html'
              })
              .state('access.404', {
                  url: '/404',
                  templateUrl: 'admin/tpl/page_404.html'
              })

              // fullCalendar
              .state('app.calendar', {
                  url: '/calendar',
                  templateUrl: 'admin/tpl/app_calendar.html',
                  // use resolve to load other dependences
                  resolve: {
                      deps: ['$ocLazyLoad', 'uiLoad',
                        function( $ocLazyLoad, uiLoad ){
                          return uiLoad.load(
                            ['admin/js/vendor/jquery/fullcalendar/fullcalendar.css',
                              'admin/js/vendor/jquery/fullcalendar/theme.css',
                              'admin/js/vendor/jquery/jquery-ui-1.10.3.custom.min.js',
                              'admin/js/vendor/libs/moment.min.js',
                              'admin/js/vendor/jquery/fullcalendar/fullcalendar.min.js',
                              'admin/js/app/calendar/calendar.js']
                          ).then(
                            function(){
                              return $ocLazyLoad.load('ui.calendar');
                            }
                          )
                      }]
                  }
              })

              // mail
              .state('app.mail', {
                  abstract: true,
                  url: '/mail',
                  templateUrl: 'admin/tpl/mail.html',
                  // use resolve to load other dependences
                  resolve: {
                      deps: ['uiLoad',
                        function( uiLoad ){
                          return uiLoad.load( ['admin/js/app/mail/mail.js',
                                               'admin/js/app/mail/mail-service.js',
                                               'admin/js/vendor/libs/moment.min.js'] );
                      }]
                  }
              })
              .state('app.mail.list', {
                  url: '/inbox/{fold}',
                  templateUrl: 'admin/tpl/mail.list.html'
              })
              .state('app.mail.detail', {
                  url: '/{mailId:[0-9]{1,4}}',
                  templateUrl: 'admin/tpl/mail.detail.html'
              })
              .state('app.mail.compose', {
                  url: '/compose',
                  templateUrl: 'admin/tpl/mail.new.html'
              })

              .state('layout', {
                  abstract: true,
                  url: '/layout',
                  templateUrl: 'admin/tpl/layout.html'
              })
              .state('layout.fullwidth', {
                  url: '/fullwidth',
                  views: {
                      '': {
                          templateUrl: 'admin/tpl/layout_fullwidth.html'
                      },
                      'footer': {
                          templateUrl: 'admin/tpl/layout_footer_fullwidth.html'
                      }
                  },
                  resolve: {
                      deps: ['uiLoad',
                        function( uiLoad ){
                          return uiLoad.load( ['admin/js/app/vectormap.js'] );
                      }]
                  }
              })
              .state('layout.mobile', {
                  url: '/mobile',
                  views: {
                      '': {
                          templateUrl: 'admin/tpl/layout_mobile.html'
                      },
                      'footer': {
                          templateUrl: 'admin/tpl/layout_footer_mobile.html'
                      }
                  }
              })
              .state('layout.app', {
                  url: '/app',
                  views: {
                      '': {
                          templateUrl: 'admin/tpl/layout_app.html'
                      },
                      'footer': {
                          templateUrl: 'admin/tpl/layout_footer_fullwidth.html'
                      }
                  },
                  resolve: {
                      deps: ['uiLoad',
                        function( uiLoad ){
                          return uiLoad.load( ['admin/js/app/tab.js'] );
                      }]
                  }
              })
              .state('apps', {
                  abstract: true,
                  url: '/apps',
                  templateUrl: 'admin/tpl/layout.html'
              })
              .state('apps.note', {
                  url: '/note',
                  templateUrl: 'admin/tpl/apps_note.html',
                  resolve: {
                      deps: ['uiLoad',
                        function( uiLoad ){
                          return uiLoad.load( ['admin/js/app/note/note.js',
                                               'admin/js/vendor/libs/moment.min.js'] );
                      }]
                  }
              })
              .state('apps.contact', {
                  url: '/contact',
                  templateUrl: 'admin/tpl/apps_contact.html',
                  resolve: {
                      deps: ['uiLoad',
                        function( uiLoad ){
                          return uiLoad.load( ['admin/js/app/contact/contact.js'] );
                      }]
                  }
              })
              .state('app.weather', {
                  url: '/weather',
                  templateUrl: 'admin/tpl/apps_weather.html',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad ){
                          return $ocLazyLoad.load(
                              {
                                  name: 'angular-skycons',
                                  files: ['admin/js/app/weather/skycons.js',
                                          'admin/js/vendor/libs/moment.min.js',
                                          'admin/js/app/weather/angular-skycons.js',
                                          'admin/js/app/weather/ctrl.js' ]
                              }
                          );
                      }]
                  }
              })
              .state('music', {
                  url: '/music',
                  templateUrl: 'admin/tpl/music.html',
                  controller: 'MusicCtrl',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad ){
                          return $ocLazyLoad.load([
                            'com.2fdevs.videogular', 
                            'com.2fdevs.videogular.plugins.controls', 
                            'com.2fdevs.videogular.plugins.overlayplay',
                            'com.2fdevs.videogular.plugins.poster',
                            'com.2fdevs.videogular.plugins.buffering',
                            'admin/js/app/music/ctrl.js',
                            'admin/js/app/music/theme.css'
                          ]);
                      }]
                  }
              })
                .state('music.home', {
                    url: '/home',
                    templateUrl: 'admin/tpl/music.home.html'
                })
                .state('music.genres', {
                    url: '/genres',
                    templateUrl: 'admin/tpl/music.genres.html'
                })
                .state('music.detail', {
                    url: '/detail',
                    templateUrl: 'admin/tpl/music.detail.html'
                })
                .state('music.mtv', {
                    url: '/mtv',
                    templateUrl: 'admin/tpl/music.mtv.html'
                })
                .state('music.mtvdetail', {
                    url: '/mtvdetail',
                    templateUrl: 'admin/tpl/music.mtv.detail.html'
                })
                .state('music.playlist', {
                    url: '/playlist/{fold}',
                    templateUrl: 'admin/tpl/music.playlist.html'
                })
      }
    ]
  );