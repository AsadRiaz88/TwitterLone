
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
  <link rel="dns-prefetch" href="https://assets-cdn.github.com">
  <link rel="dns-prefetch" href="https://avatars0.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars1.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars2.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars3.githubusercontent.com">
  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com">
  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">



  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-1c2c316b7a17f15536c6a26ed744654fc228a24658a7ae395cdcbf8329c8406b.css" integrity="sha256-HCwxa3oX8VU2xqJu10RlT8IookZYp645XNy/gynIQGs=" media="all" rel="stylesheet" />
  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-8100b9bf1eb6ed8b38eaad2fe7ba51d1895aa0602aafe4a87068d444e07e8c5c.css" integrity="sha256-gQC5vx627Ys46q0v57pR0YlaoGAqr+SocGjUROB+jFw=" media="all" rel="stylesheet" />
  
  
  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/site-44b6bba3881278f33c221b6526379b55fbd098af3e553f54e81cab4c9a517c8e.css" integrity="sha256-RLa7o4gSePM8IhtlJjebVfvQmK8+VT9U6ByrTJpRfI4=" media="all" rel="stylesheet" />
  

  <meta name="viewport" content="width=device-width">
  
  <title>bower-angular-route/angular-route.js at master · angular/bower-angular-route · GitHub</title>
  <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    
    <meta content="https://avatars2.githubusercontent.com/u/139426?s=400&amp;v=4" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="angular/bower-angular-route" property="og:title" /><meta content="https://github.com/angular/bower-angular-route" property="og:url" /><meta content="bower-angular-route - angular-route bower repo" property="og:description" />

  <link rel="assets" href="https://assets-cdn.github.com/">
  
  <meta name="pjax-timeout" content="1000">
  
  <meta name="request-id" content="DAA7:3AC4:A5B59E3:10D8C213:5A47DE9A" data-pjax-transient>
  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
  <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
  <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="https://collector.githubapp.com/github-external/browser_event" name="octolytics-event-url" /><meta content="DAA7:3AC4:A5B59E3:10D8C213:5A47DE9A" name="octolytics-dimension-request_id" /><meta content="iad" name="octolytics-dimension-region_edge" /><meta content="iad" name="octolytics-dimension-region_render" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />




  <meta class="js-ga-set" name="dimension1" content="Logged Out">


  

      <meta name="hostname" content="github.com">
  <meta name="user-login" content="">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="OWViNjRhZmM3ZmMyYTgyOWM0M2NiOTE5OTQ3ZTg1Y2ExYTY3ZTI1ZTFmYjBkZjk2NGQwYzE4MGY0OTcyNzk3YXx7InJlbW90ZV9hZGRyZXNzIjoiMzkuMzMuMjQxLjQ5IiwicmVxdWVzdF9pZCI6IkRBQTc6M0FDNDpBNUI1OUUzOjEwRDhDMjEzOjVBNDdERTlBIiwidGltZXN0YW1wIjoxNTE0NjU5NDg5LCJob3N0IjoiZ2l0aHViLmNvbSJ9">


  <meta name="html-safe-nonce" content="b19dd08b5411fd632ee73fa0752f0c6c9a22f907">

  <meta http-equiv="x-pjax-version" content="e6dbf537b2eb3990c0cae54500f32daf">
  

      <link href="https://github.com/angular/bower-angular-route/commits/master.atom" rel="alternate" title="Recent Commits to bower-angular-route:master" type="application/atom+xml">

  <meta name="description" content="bower-angular-route - angular-route bower repo">
  <meta name="go-import" content="github.com/angular/bower-angular-route git https://github.com/angular/bower-angular-route.git">

  <meta content="139426" name="octolytics-dimension-user_id" /><meta content="angular" name="octolytics-dimension-user_login" /><meta content="12093618" name="octolytics-dimension-repository_id" /><meta content="angular/bower-angular-route" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="12093618" name="octolytics-dimension-repository_network_root_id" /><meta content="angular/bower-angular-route" name="octolytics-dimension-repository_network_root_nwo" /><meta content="false" name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" />


    <link rel="canonical" href="https://github.com/angular/bower-angular-route/blob/master/angular-route.js" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" class="js-site-favicon" href="https://assets-cdn.github.com/favicon.ico">

<meta name="theme-color" content="#1e2327">


  <meta name="u2f-support" content="true">

  </head>

  <body class="logged-out env-production page-blob">
    

  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="px-2 py-4 show-on-focus js-skip-to-content">Skip to content</a>
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>

    
    
    
      



        <header class="Header header-logged-out  position-relative f4 py-3" role="banner">
  <div class="container-lg d-flex px-3">
    <div class="d-flex flex-justify-between flex-items-center">
      <a class="header-logo-invertocat my-0" href="https://github.com/" aria-label="Homepage" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
        <svg aria-hidden="true" class="octicon octicon-mark-github" height="32" version="1.1" viewBox="0 0 16 16" width="32"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
      </a>

    </div>

    <div class="HeaderMenu HeaderMenu--bright d-flex flex-justify-between flex-auto">
        <nav class="mt-0">
          <ul class="d-flex list-style-none">
              <li class="ml-2">
                <a href="/features" class="js-selected-navigation-item HeaderNavlink px-0 py-2 m-0" data-ga-click="Header, click, Nav menu - item:features" data-selected-links="/features /features/project-management /features/code-review /features/project-management /features/integrations /features">
                  Features
</a>              </li>
              <li class="ml-4">
                <a href="/business" class="js-selected-navigation-item HeaderNavlink px-0 py-2 m-0" data-ga-click="Header, click, Nav menu - item:business" data-selected-links="/business /business/security /business/customers /business">
                  Business
</a>              </li>

              <li class="ml-4">
                <a href="/explore" class="js-selected-navigation-item HeaderNavlink px-0 py-2 m-0" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship showcases showcases_search showcases_landing /explore">
                  Explore
</a>              </li>

              <li class="ml-4">
                    <a href="/marketplace" class="js-selected-navigation-item HeaderNavlink px-0 py-2 m-0" data-ga-click="Header, click, Nav menu - item:marketplace" data-selected-links=" /marketplace">
                      Marketplace
</a>              </li>
              <li class="ml-4">
                <a href="/pricing" class="js-selected-navigation-item HeaderNavlink px-0 py-2 m-0" data-ga-click="Header, click, Nav menu - item:pricing" data-selected-links="/pricing /pricing/developer /pricing/team /pricing/business-hosted /pricing/business-enterprise /pricing">
                  Pricing
</a>              </li>
          </ul>
        </nav>

      <div class="d-flex">
          <div class="d-lg-flex flex-items-center mr-3">
            <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/angular/bower-angular-route/search" class="js-site-search-form" data-scoped-search-url="/angular/bower-angular-route/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
        <a href="/angular/bower-angular-route/blob/master/angular-route.js" class="header-search-scope no-underline">This repository</a>
      <input type="text"
        class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable"
        data-hotkey="s"
        name="q"
        value=""
        placeholder="Search"
        aria-label="Search this repository"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        autocapitalize="off">
        <input type="hidden" class="js-site-search-type-field" name="type" >
    </label>
</form></div>

          </div>

        <span class="d-inline-block">
            <div class="HeaderNavlink px-0 py-2 m-0">
              <a class="text-bold text-white no-underline" href="/login?return_to=%2Fangular%2Fbower-angular-route%2Fblob%2Fmaster%2Fangular-route.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
                <span class="text-gray">or</span>
                <a class="text-bold text-white no-underline" href="/join?source=header-repo" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign up</a>
            </div>
        </span>
      </div>
    </div>
  </div>
</header>


  </div>

  <div id="start-of-content" class="show-on-focus"></div>

    <div id="js-flash-container">
</div>



  <div role="main">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode">
    <div id="js-repo-pjax-container" data-pjax-container>
      



  



  <div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav ">
    <div class="repohead-details-container clearfix container ">

      <ul class="pagehead-actions">
  <li>
      <a href="/login?return_to=%2Fangular%2Fbower-angular-route"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to watch a repository" rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
    Watch
  </a>
  <a class="social-count" href="/angular/bower-angular-route/watchers"
     aria-label="28 users are watching this repository">
    28
  </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fangular%2Fbower-angular-route"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
    Star
  </a>

    <a class="social-count js-social-count" href="/angular/bower-angular-route/stargazers"
      aria-label="144 users starred this repository">
      144
    </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fangular%2Fbower-angular-route"
        class="btn btn-sm btn-with-count tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
        Fork
      </a>

    <a href="/angular/bower-angular-route/network" class="social-count"
       aria-label="513 users forked this repository">
      513
    </a>
  </li>
</ul>

      <h1 class="public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a href="/angular" class="url fn" rel="author">angular</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/angular/bower-angular-route" data-pjax="#js-repo-pjax-container">bower-angular-route</a></strong>

</h1>

    </div>
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax container"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/angular/bower-angular-route" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /angular/bower-angular-route" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>


  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/angular/bower-angular-route/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /angular/bower-angular-route/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="Counter">0</span>
      <meta itemprop="position" content="3">
</a>  </span>

    <a href="/angular/bower-angular-route/projects" class="js-selected-navigation-item reponav-item" data-hotkey="g b" data-selected-links="repo_projects new_repo_project repo_project /angular/bower-angular-route/projects">
      <svg aria-hidden="true" class="octicon octicon-project" height="16" version="1.1" viewBox="0 0 15 16" width="15"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      Projects
      <span class="Counter" >0</span>
</a>


  <a href="/angular/bower-angular-route/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors dependency_graph pulse /angular/bower-angular-route/pulse">
    <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
    Insights
</a>

</nav>


  </div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    
  <a href="/angular/bower-angular-route/blob/afc89a6d2406435851ed1402eddba1ea2c86f57a/angular-route.js" class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>

  <!-- blob contrib key: blob_contributors:v21:f3a89e3a22ef48047a5806c8a891f94a -->

  <div class="file-navigation js-zeroclipboard-container">
    
<div class="select-menu branch-select-menu js-menu-container js-select-menu float-left">
  <button class=" btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    
    type="button" aria-label="Switch branches or tags" aria-expanded="false" aria-haspopup="true">
      <i>Branch:</i>
      <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/angular/bower-angular-route/blob/master/angular-route.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.9-build.5527+sha.e942e1e/angular-route.js"
              data-name="v1.6.9-build.5527+sha.e942e1e"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.9-build.5527+sha.e942e1e">
                v1.6.9-build.5527+sha.e942e1e
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.9-build.5526+sha.96dd35a/angular-route.js"
              data-name="v1.6.9-build.5526+sha.96dd35a"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.9-build.5526+sha.96dd35a">
                v1.6.9-build.5526+sha.96dd35a
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.8/angular-route.js"
              data-name="v1.6.8"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.8">
                v1.6.8
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.8-build.5525+sha.9a521cb/angular-route.js"
              data-name="v1.6.8-build.5525+sha.9a521cb"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.8-build.5525+sha.9a521cb">
                v1.6.8-build.5525+sha.9a521cb
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.8-build.5524+sha.62743a5/angular-route.js"
              data-name="v1.6.8-build.5524+sha.62743a5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.8-build.5524+sha.62743a5">
                v1.6.8-build.5524+sha.62743a5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.8-build.5523+sha.22450e5/angular-route.js"
              data-name="v1.6.8-build.5523+sha.22450e5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.8-build.5523+sha.22450e5">
                v1.6.8-build.5523+sha.22450e5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.8-build.5522+sha.240a3dd/angular-route.js"
              data-name="v1.6.8-build.5522+sha.240a3dd"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.8-build.5522+sha.240a3dd">
                v1.6.8-build.5522+sha.240a3dd
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.8-build.5521+sha.7df2952/angular-route.js"
              data-name="v1.6.8-build.5521+sha.7df2952"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.8-build.5521+sha.7df2952">
                v1.6.8-build.5521+sha.7df2952
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.8-build.5520+sha.f6e60c1/angular-route.js"
              data-name="v1.6.8-build.5520+sha.f6e60c1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.8-build.5520+sha.f6e60c1">
                v1.6.8-build.5520+sha.f6e60c1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.8-build.5519+sha.5c38fb7/angular-route.js"
              data-name="v1.6.8-build.5519+sha.5c38fb7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.8-build.5519+sha.5c38fb7">
                v1.6.8-build.5519+sha.5c38fb7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.8-build.5518+sha.41d5c90/angular-route.js"
              data-name="v1.6.8-build.5518+sha.41d5c90"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.8-build.5518+sha.41d5c90">
                v1.6.8-build.5518+sha.41d5c90
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.8-build.5517+sha.2c1e589/angular-route.js"
              data-name="v1.6.8-build.5517+sha.2c1e589"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.8-build.5517+sha.2c1e589">
                v1.6.8-build.5517+sha.2c1e589
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.8-build.5516+sha.6d5ef34/angular-route.js"
              data-name="v1.6.8-build.5516+sha.6d5ef34"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.8-build.5516+sha.6d5ef34">
                v1.6.8-build.5516+sha.6d5ef34
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.8-build.5515+sha.00815db/angular-route.js"
              data-name="v1.6.8-build.5515+sha.00815db"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.8-build.5515+sha.00815db">
                v1.6.8-build.5515+sha.00815db
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.8-build.5512+sha.dde520e/angular-route.js"
              data-name="v1.6.8-build.5512+sha.dde520e"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.8-build.5512+sha.dde520e">
                v1.6.8-build.5512+sha.dde520e
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.8-build.5511+sha.394b185/angular-route.js"
              data-name="v1.6.8-build.5511+sha.394b185"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.8-build.5511+sha.394b185">
                v1.6.8-build.5511+sha.394b185
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.8-build.5510+sha.da72477/angular-route.js"
              data-name="v1.6.8-build.5510+sha.da72477"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.8-build.5510+sha.da72477">
                v1.6.8-build.5510+sha.da72477
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.8-build.5509+sha.74b04c9/angular-route.js"
              data-name="v1.6.8-build.5509+sha.74b04c9"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.8-build.5509+sha.74b04c9">
                v1.6.8-build.5509+sha.74b04c9
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.8-build.5508+sha.2e03aed/angular-route.js"
              data-name="v1.6.8-build.5508+sha.2e03aed"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.8-build.5508+sha.2e03aed">
                v1.6.8-build.5508+sha.2e03aed
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.8-build.5507+sha.199d888/angular-route.js"
              data-name="v1.6.8-build.5507+sha.199d888"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.8-build.5507+sha.199d888">
                v1.6.8-build.5507+sha.199d888
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.8-build.5506+sha.8b69d91/angular-route.js"
              data-name="v1.6.8-build.5506+sha.8b69d91"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.8-build.5506+sha.8b69d91">
                v1.6.8-build.5506+sha.8b69d91
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.8-build.5505+sha.0fa5a37/angular-route.js"
              data-name="v1.6.8-build.5505+sha.0fa5a37"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.8-build.5505+sha.0fa5a37">
                v1.6.8-build.5505+sha.0fa5a37
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.7/angular-route.js"
              data-name="v1.6.7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.7">
                v1.6.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.7-build.5504+sha.07e4751/angular-route.js"
              data-name="v1.6.7-build.5504+sha.07e4751"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.7-build.5504+sha.07e4751">
                v1.6.7-build.5504+sha.07e4751
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.7-build.5503+sha.5838017/angular-route.js"
              data-name="v1.6.7-build.5503+sha.5838017"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.7-build.5503+sha.5838017">
                v1.6.7-build.5503+sha.5838017
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.7-build.5502+sha.f2f5ac7/angular-route.js"
              data-name="v1.6.7-build.5502+sha.f2f5ac7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.7-build.5502+sha.f2f5ac7">
                v1.6.7-build.5502+sha.f2f5ac7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.7-build.5501+sha.55ba449/angular-route.js"
              data-name="v1.6.7-build.5501+sha.55ba449"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.7-build.5501+sha.55ba449">
                v1.6.7-build.5501+sha.55ba449
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.7-build.5500+sha.aa3f951/angular-route.js"
              data-name="v1.6.7-build.5500+sha.aa3f951"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.7-build.5500+sha.aa3f951">
                v1.6.7-build.5500+sha.aa3f951
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.7-build.5499+sha.12cf994/angular-route.js"
              data-name="v1.6.7-build.5499+sha.12cf994"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.7-build.5499+sha.12cf994">
                v1.6.7-build.5499+sha.12cf994
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.7-build.5498+sha.873e263/angular-route.js"
              data-name="v1.6.7-build.5498+sha.873e263"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.7-build.5498+sha.873e263">
                v1.6.7-build.5498+sha.873e263
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.7-build.5496+sha.181ac0b/angular-route.js"
              data-name="v1.6.7-build.5496+sha.181ac0b"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.7-build.5496+sha.181ac0b">
                v1.6.7-build.5496+sha.181ac0b
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.7-build.5495+sha.0cbc505/angular-route.js"
              data-name="v1.6.7-build.5495+sha.0cbc505"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.7-build.5495+sha.0cbc505">
                v1.6.7-build.5495+sha.0cbc505
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.7-build.5494+sha.667db46/angular-route.js"
              data-name="v1.6.7-build.5494+sha.667db46"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.7-build.5494+sha.667db46">
                v1.6.7-build.5494+sha.667db46
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.7-build.5493+sha.2c9c3a0/angular-route.js"
              data-name="v1.6.7-build.5493+sha.2c9c3a0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.7-build.5493+sha.2c9c3a0">
                v1.6.7-build.5493+sha.2c9c3a0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.7-build.5492+sha.817ac56/angular-route.js"
              data-name="v1.6.7-build.5492+sha.817ac56"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.7-build.5492+sha.817ac56">
                v1.6.7-build.5492+sha.817ac56
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.7-build.5491+sha.0864f73/angular-route.js"
              data-name="v1.6.7-build.5491+sha.0864f73"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.7-build.5491+sha.0864f73">
                v1.6.7-build.5491+sha.0864f73
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.7-build.5489+sha.9871ada/angular-route.js"
              data-name="v1.6.7-build.5489+sha.9871ada"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.7-build.5489+sha.9871ada">
                v1.6.7-build.5489+sha.9871ada
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.7-build.5488+sha.202f180/angular-route.js"
              data-name="v1.6.7-build.5488+sha.202f180"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.7-build.5488+sha.202f180">
                v1.6.7-build.5488+sha.202f180
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.7-build.5487+sha.32fbb2e/angular-route.js"
              data-name="v1.6.7-build.5487+sha.32fbb2e"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.7-build.5487+sha.32fbb2e">
                v1.6.7-build.5487+sha.32fbb2e
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.7-build.5486+sha.9ba07e9/angular-route.js"
              data-name="v1.6.7-build.5486+sha.9ba07e9"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.7-build.5486+sha.9ba07e9">
                v1.6.7-build.5486+sha.9ba07e9
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.7-build.5485+sha.dfcb5ac/angular-route.js"
              data-name="v1.6.7-build.5485+sha.dfcb5ac"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.7-build.5485+sha.dfcb5ac">
                v1.6.7-build.5485+sha.dfcb5ac
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.7-build.5484+sha.0f0a16e/angular-route.js"
              data-name="v1.6.7-build.5484+sha.0f0a16e"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.7-build.5484+sha.0f0a16e">
                v1.6.7-build.5484+sha.0f0a16e
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.7-build.5483+sha.84294ec/angular-route.js"
              data-name="v1.6.7-build.5483+sha.84294ec"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.7-build.5483+sha.84294ec">
                v1.6.7-build.5483+sha.84294ec
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.7-build.5482+sha.69e0968/angular-route.js"
              data-name="v1.6.7-build.5482+sha.69e0968"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.7-build.5482+sha.69e0968">
                v1.6.7-build.5482+sha.69e0968
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.7-build.5480+sha.00936ad/angular-route.js"
              data-name="v1.6.7-build.5480+sha.00936ad"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.7-build.5480+sha.00936ad">
                v1.6.7-build.5480+sha.00936ad
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.7-build.5479+sha.656c8fa/angular-route.js"
              data-name="v1.6.7-build.5479+sha.656c8fa"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.7-build.5479+sha.656c8fa">
                v1.6.7-build.5479+sha.656c8fa
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.7-build.5478+sha.5462373/angular-route.js"
              data-name="v1.6.7-build.5478+sha.5462373"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.7-build.5478+sha.5462373">
                v1.6.7-build.5478+sha.5462373
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.7-build.5477+sha.5f76bc6/angular-route.js"
              data-name="v1.6.7-build.5477+sha.5f76bc6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.7-build.5477+sha.5f76bc6">
                v1.6.7-build.5477+sha.5f76bc6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.7-build.5476+sha.c8d3498/angular-route.js"
              data-name="v1.6.7-build.5476+sha.c8d3498"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.7-build.5476+sha.c8d3498">
                v1.6.7-build.5476+sha.c8d3498
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.7-build.5475+sha.e5c6174/angular-route.js"
              data-name="v1.6.7-build.5475+sha.e5c6174"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.7-build.5475+sha.e5c6174">
                v1.6.7-build.5475+sha.e5c6174
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.7-build.5474+sha.8166dd4/angular-route.js"
              data-name="v1.6.7-build.5474+sha.8166dd4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.7-build.5474+sha.8166dd4">
                v1.6.7-build.5474+sha.8166dd4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.7-build.5473+sha.0822d34/angular-route.js"
              data-name="v1.6.7-build.5473+sha.0822d34"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.7-build.5473+sha.0822d34">
                v1.6.7-build.5473+sha.0822d34
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.7-build.5472+sha.05fdf91/angular-route.js"
              data-name="v1.6.7-build.5472+sha.05fdf91"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.7-build.5472+sha.05fdf91">
                v1.6.7-build.5472+sha.05fdf91
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.7-build.5471+sha.6eb15cb/angular-route.js"
              data-name="v1.6.7-build.5471+sha.6eb15cb"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.7-build.5471+sha.6eb15cb">
                v1.6.7-build.5471+sha.6eb15cb
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.7-build.5470+sha.72a87ce/angular-route.js"
              data-name="v1.6.7-build.5470+sha.72a87ce"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.7-build.5470+sha.72a87ce">
                v1.6.7-build.5470+sha.72a87ce
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.7-build.5469+sha.6d997f5/angular-route.js"
              data-name="v1.6.7-build.5469+sha.6d997f5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.7-build.5469+sha.6d997f5">
                v1.6.7-build.5469+sha.6d997f5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.7-build.5468+sha.34237f9/angular-route.js"
              data-name="v1.6.7-build.5468+sha.34237f9"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.7-build.5468+sha.34237f9">
                v1.6.7-build.5468+sha.34237f9
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.7-build.5467+sha.34237f9/angular-route.js"
              data-name="v1.6.7-build.5467+sha.34237f9"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.7-build.5467+sha.34237f9">
                v1.6.7-build.5467+sha.34237f9
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.7-build.5466+sha.da6ae8b/angular-route.js"
              data-name="v1.6.7-build.5466+sha.da6ae8b"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.7-build.5466+sha.da6ae8b">
                v1.6.7-build.5466+sha.da6ae8b
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.7-build.5465+sha.efaf59f/angular-route.js"
              data-name="v1.6.7-build.5465+sha.efaf59f"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.7-build.5465+sha.efaf59f">
                v1.6.7-build.5465+sha.efaf59f
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.7-build.5464+sha.efaf59f/angular-route.js"
              data-name="v1.6.7-build.5464+sha.efaf59f"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.7-build.5464+sha.efaf59f">
                v1.6.7-build.5464+sha.efaf59f
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.7-build.5463+sha.f18dd29/angular-route.js"
              data-name="v1.6.7-build.5463+sha.f18dd29"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.7-build.5463+sha.f18dd29">
                v1.6.7-build.5463+sha.f18dd29
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.7-build.5462+sha.97b00ca/angular-route.js"
              data-name="v1.6.7-build.5462+sha.97b00ca"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.7-build.5462+sha.97b00ca">
                v1.6.7-build.5462+sha.97b00ca
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.7-build.5461+sha.5728076/angular-route.js"
              data-name="v1.6.7-build.5461+sha.5728076"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.7-build.5461+sha.5728076">
                v1.6.7-build.5461+sha.5728076
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.7-build.5460+sha.8f61cf6/angular-route.js"
              data-name="v1.6.7-build.5460+sha.8f61cf6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.7-build.5460+sha.8f61cf6">
                v1.6.7-build.5460+sha.8f61cf6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.7-build.5459+sha.21a2f4b/angular-route.js"
              data-name="v1.6.7-build.5459+sha.21a2f4b"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.7-build.5459+sha.21a2f4b">
                v1.6.7-build.5459+sha.21a2f4b
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.7-build.5458+sha.20590c0/angular-route.js"
              data-name="v1.6.7-build.5458+sha.20590c0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.7-build.5458+sha.20590c0">
                v1.6.7-build.5458+sha.20590c0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.7-build.5457+sha.ecc09a4/angular-route.js"
              data-name="v1.6.7-build.5457+sha.ecc09a4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.7-build.5457+sha.ecc09a4">
                v1.6.7-build.5457+sha.ecc09a4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.7-build.5456+sha.3651e42/angular-route.js"
              data-name="v1.6.7-build.5456+sha.3651e42"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.7-build.5456+sha.3651e42">
                v1.6.7-build.5456+sha.3651e42
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.7-build.5455+sha.233a93f/angular-route.js"
              data-name="v1.6.7-build.5455+sha.233a93f"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.7-build.5455+sha.233a93f">
                v1.6.7-build.5455+sha.233a93f
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.7-build.5454+sha.59a9c13/angular-route.js"
              data-name="v1.6.7-build.5454+sha.59a9c13"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.7-build.5454+sha.59a9c13">
                v1.6.7-build.5454+sha.59a9c13
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.7-build.5453+sha.66dff7c/angular-route.js"
              data-name="v1.6.7-build.5453+sha.66dff7c"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.7-build.5453+sha.66dff7c">
                v1.6.7-build.5453+sha.66dff7c
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.6/angular-route.js"
              data-name="v1.6.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.6">
                v1.6.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.6-build.5452+sha.6d2ff0a/angular-route.js"
              data-name="v1.6.6-build.5452+sha.6d2ff0a"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.6-build.5452+sha.6d2ff0a">
                v1.6.6-build.5452+sha.6d2ff0a
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.6-build.5451+sha.7c87628/angular-route.js"
              data-name="v1.6.6-build.5451+sha.7c87628"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.6-build.5451+sha.7c87628">
                v1.6.6-build.5451+sha.7c87628
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.6-build.5450+sha.a83d646/angular-route.js"
              data-name="v1.6.6-build.5450+sha.a83d646"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.6-build.5450+sha.a83d646">
                v1.6.6-build.5450+sha.a83d646
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.6-build.5449+sha.919087f/angular-route.js"
              data-name="v1.6.6-build.5449+sha.919087f"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.6-build.5449+sha.919087f">
                v1.6.6-build.5449+sha.919087f
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.6-build.5448+sha.5b31b37/angular-route.js"
              data-name="v1.6.6-build.5448+sha.5b31b37"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.6-build.5448+sha.5b31b37">
                v1.6.6-build.5448+sha.5b31b37
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.6-build.5447+sha.c9691a2/angular-route.js"
              data-name="v1.6.6-build.5447+sha.c9691a2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.6-build.5447+sha.c9691a2">
                v1.6.6-build.5447+sha.c9691a2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.6-build.5446+sha.9b6c154/angular-route.js"
              data-name="v1.6.6-build.5446+sha.9b6c154"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.6-build.5446+sha.9b6c154">
                v1.6.6-build.5446+sha.9b6c154
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.6-build.5445+sha.56ac2a7/angular-route.js"
              data-name="v1.6.6-build.5445+sha.56ac2a7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.6-build.5445+sha.56ac2a7">
                v1.6.6-build.5445+sha.56ac2a7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.6-build.5444+sha.a784fab/angular-route.js"
              data-name="v1.6.6-build.5444+sha.a784fab"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.6-build.5444+sha.a784fab">
                v1.6.6-build.5444+sha.a784fab
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.6-build.5443+sha.3650723/angular-route.js"
              data-name="v1.6.6-build.5443+sha.3650723"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.6-build.5443+sha.3650723">
                v1.6.6-build.5443+sha.3650723
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.6-build.5442+sha.aee5d02/angular-route.js"
              data-name="v1.6.6-build.5442+sha.aee5d02"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.6-build.5442+sha.aee5d02">
                v1.6.6-build.5442+sha.aee5d02
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.6-build.5441+sha.0179c70/angular-route.js"
              data-name="v1.6.6-build.5441+sha.0179c70"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.6-build.5441+sha.0179c70">
                v1.6.6-build.5441+sha.0179c70
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.6-build.5440+sha.394dbcc/angular-route.js"
              data-name="v1.6.6-build.5440+sha.394dbcc"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.6-build.5440+sha.394dbcc">
                v1.6.6-build.5440+sha.394dbcc
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.6-build.5439+sha.f1d01bb/angular-route.js"
              data-name="v1.6.6-build.5439+sha.f1d01bb"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.6-build.5439+sha.f1d01bb">
                v1.6.6-build.5439+sha.f1d01bb
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.6-build.5438+sha.01d6a47/angular-route.js"
              data-name="v1.6.6-build.5438+sha.01d6a47"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.6-build.5438+sha.01d6a47">
                v1.6.6-build.5438+sha.01d6a47
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.6-build.5437+sha.ac57a25/angular-route.js"
              data-name="v1.6.6-build.5437+sha.ac57a25"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.6-build.5437+sha.ac57a25">
                v1.6.6-build.5437+sha.ac57a25
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.6-build.5436+sha.87a586e/angular-route.js"
              data-name="v1.6.6-build.5436+sha.87a586e"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.6-build.5436+sha.87a586e">
                v1.6.6-build.5436+sha.87a586e
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.6-build.5435+sha.e6d5fe7/angular-route.js"
              data-name="v1.6.6-build.5435+sha.e6d5fe7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.6-build.5435+sha.e6d5fe7">
                v1.6.6-build.5435+sha.e6d5fe7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.6-build.5434+sha.823c7ed/angular-route.js"
              data-name="v1.6.6-build.5434+sha.823c7ed"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.6-build.5434+sha.823c7ed">
                v1.6.6-build.5434+sha.823c7ed
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.6-build.5433+sha.631076a/angular-route.js"
              data-name="v1.6.6-build.5433+sha.631076a"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.6-build.5433+sha.631076a">
                v1.6.6-build.5433+sha.631076a
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.6-build.5432+sha.341f8db/angular-route.js"
              data-name="v1.6.6-build.5432+sha.341f8db"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.6-build.5432+sha.341f8db">
                v1.6.6-build.5432+sha.341f8db
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.6-build.5431+sha.8de9794/angular-route.js"
              data-name="v1.6.6-build.5431+sha.8de9794"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.6-build.5431+sha.8de9794">
                v1.6.6-build.5431+sha.8de9794
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.6-build.5430+sha.2fb2d09/angular-route.js"
              data-name="v1.6.6-build.5430+sha.2fb2d09"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.6-build.5430+sha.2fb2d09">
                v1.6.6-build.5430+sha.2fb2d09
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.6-build.5429+sha.529550d/angular-route.js"
              data-name="v1.6.6-build.5429+sha.529550d"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.6-build.5429+sha.529550d">
                v1.6.6-build.5429+sha.529550d
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.6-build.5428+sha.828a275/angular-route.js"
              data-name="v1.6.6-build.5428+sha.828a275"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.6-build.5428+sha.828a275">
                v1.6.6-build.5428+sha.828a275
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.6-build.5427+sha.7e97db9/angular-route.js"
              data-name="v1.6.6-build.5427+sha.7e97db9"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.6-build.5427+sha.7e97db9">
                v1.6.6-build.5427+sha.7e97db9
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/angular/bower-angular-route/tree/v1.6.6-build.5426+sha.6a22c79/angular-route.js"
              data-name="v1.6.6-build.5426+sha.6a22c79"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.6.6-build.5426+sha.6a22c79">
                v1.6.6-build.5426+sha.6a22c79
              </span>
            </a>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

    <div class="BtnGroup float-right">
      <a href="/angular/bower-angular-route/find/master"
            class="js-pjax-capture-input btn btn-sm BtnGroup-item"
            data-pjax
            data-hotkey="t">
        Find file
      </a>
      <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm BtnGroup-item tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
    </div>
    <div class="breadcrumb js-zeroclipboard-target">
      <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/angular/bower-angular-route"><span>bower-angular-route</span></a></span></span><span class="separator">/</span><strong class="final-path">angular-route.js</strong>
    </div>
  </div>


  
  <div class="commit-tease">
      <span class="float-right">
        <a class="commit-tease-sha" href="/angular/bower-angular-route/commit/afc89a6d2406435851ed1402eddba1ea2c86f57a" data-pjax>
          afc89a6
        </a>
        <relative-time datetime="2017-12-29T17:06:48Z">Dec 29, 2017</relative-time>
      </span>
      <div>
        <img alt="@NgDashboard" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/6013193?s=40&amp;v=4" width="20" />
        <a href="/NgDashboard" class="user-mention" rel="contributor">NgDashboard</a>
          <a href="/angular/bower-angular-route/commit/afc89a6d2406435851ed1402eddba1ea2c86f57a" class="message" data-pjax="true" title="v1.6.9-build.5527+sha.e942e1e">v1.6.9-build.5527+sha.e942e1e</a>
      </div>

    <div class="commit-tease-contributors">
      <button type="button" class="btn-link muted-link contributors-toggle" data-facebox="#blob_contributors_box">
        <strong>5</strong>
         contributors
      </button>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="NgDashboard" href="/angular/bower-angular-route/commits/master/angular-route.js?author=NgDashboard"><img alt="@NgDashboard" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/6013193?s=40&amp;v=4" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="btford" href="/angular/bower-angular-route/commits/master/angular-route.js?author=btford"><img alt="@btford" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/474988?s=40&amp;v=4" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="tbosch" href="/angular/bower-angular-route/commits/master/angular-route.js?author=tbosch"><img alt="@tbosch" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/690815?s=40&amp;v=4" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="jeffbcross" href="/angular/bower-angular-route/commits/master/angular-route.js?author=jeffbcross"><img alt="@jeffbcross" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/463703?s=40&amp;v=4" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="vojtajina" href="/angular/bower-angular-route/commits/master/angular-route.js?author=vojtajina"><img alt="@vojtajina" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/46647?s=40&amp;v=4" width="20" /> </a>


    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@NgDashboard" height="24" src="https://avatars0.githubusercontent.com/u/6013193?s=48&amp;v=4" width="24" />
            <a href="/NgDashboard">NgDashboard</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@btford" height="24" src="https://avatars3.githubusercontent.com/u/474988?s=48&amp;v=4" width="24" />
            <a href="/btford">btford</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@tbosch" height="24" src="https://avatars2.githubusercontent.com/u/690815?s=48&amp;v=4" width="24" />
            <a href="/tbosch">tbosch</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@jeffbcross" height="24" src="https://avatars1.githubusercontent.com/u/463703?s=48&amp;v=4" width="24" />
            <a href="/jeffbcross">jeffbcross</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@vojtajina" height="24" src="https://avatars1.githubusercontent.com/u/46647?s=48&amp;v=4" width="24" />
            <a href="/vojtajina">vojtajina</a>
          </li>
      </ul>
    </div>
  </div>


  <div class="file">
    <div class="file-header">
  <div class="file-actions">

    <div class="BtnGroup">
      <a href="/angular/bower-angular-route/raw/master/angular-route.js" class="btn btn-sm BtnGroup-item" id="raw-url">Raw</a>
        <a href="/angular/bower-angular-route/blame/master/angular-route.js" class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b">Blame</a>
      <a href="/angular/bower-angular-route/commits/master/angular-route.js" class="btn btn-sm BtnGroup-item" rel="nofollow">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="https://desktop.github.com"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"/></svg>
        </a>

        <button type="button" class="btn-octicon disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
        </button>
        <button type="button" class="btn-octicon btn-octicon-danger disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
        </button>
  </div>

  <div class="file-info">
      1225 lines (1118 sloc)
      <span class="file-info-divider"></span>
    43.9 KB
  </div>
</div>

    

  <div itemprop="text" class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-k">@license</span> <span class="pl-smi">AngularJS</span> v1.6.9-build.5527+sha.e942e1e</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * (c) 2010-2017 Google, Inc. http://angularjs.org</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * License: MIT</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line">(<span class="pl-k">function</span>(<span class="pl-c1">window</span>, <span class="pl-smi">angular</span>) {<span class="pl-s"><span class="pl-pds">&#39;</span>use strict<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">/*</span> global shallowCopy: true <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Creates a shallow copy of an object, an array or a primitive.</span></td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Assumes that there are no proto properties for objects.</span></td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">shallowCopy</span>(<span class="pl-smi">src</span>, <span class="pl-smi">dst</span>) {</td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (<span class="pl-en">isArray</span>(src)) {</td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line">    dst <span class="pl-k">=</span> dst <span class="pl-k">||</span> [];</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>, ii <span class="pl-k">=</span> <span class="pl-smi">src</span>.<span class="pl-c1">length</span>; i <span class="pl-k">&lt;</span> ii; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line">      dst[i] <span class="pl-k">=</span> src[i];</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line">  } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-en">isObject</span>(src)) {</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line">    dst <span class="pl-k">=</span> dst <span class="pl-k">||</span> {};</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span> (<span class="pl-k">var</span> key <span class="pl-k">in</span> src) {</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-k">!</span>(<span class="pl-smi">key</span>.<span class="pl-c1">charAt</span>(<span class="pl-c1">0</span>) <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>$<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">key</span>.<span class="pl-c1">charAt</span>(<span class="pl-c1">1</span>) <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>$<span class="pl-pds">&#39;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line">        dst[key] <span class="pl-k">=</span> src[key];</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">return</span> dst <span class="pl-k">||</span> src;</td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">/*</span> global shallowCopy: false <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> `isArray` and `isObject` are necessary for `shallowCopy()` (included via `src/shallowCopy.js`).</span></td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> They are initialized inside the `$RouteProvider`, to ensure `window.angular` is available.</span></td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> isArray;</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> isObject;</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> isDefined;</td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> noop;</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * @ngdoc module</span></td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-k">@name</span> <span class="pl-en">ngRoute</span></span></td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-k">@description</span></span></td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * The `ngRoute` module provides routing and deeplinking services and directives for AngularJS apps.</span></td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * ## Example</span></td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * See <span class="pl-en">{<span class="pl-k">@link</span> <span class="pl-smi">ngRoute.$route#examples</span> $route}</span> for an example of configuring and using `ngRoute`.</span></td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">/*</span> global -ngRouteModule <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> ngRouteModule <span class="pl-k">=</span> angular.</td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">module</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>ngRoute<span class="pl-pds">&#39;</span></span>, []).</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">info</span>({ angularVersion<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>1.6.9-build.5527+sha.e942e1e<span class="pl-pds">&#39;</span></span> }).</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">provider</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>$route<span class="pl-pds">&#39;</span></span>, $RouteProvider).</td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Ensure `$route` will be instantiated in time to capture the initial `$locationChangeSuccess`</span></td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> event (unless explicitly disabled). This is necessary in case `ngView` is included in an</span></td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> asynchronously loaded template.</span></td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">run</span>(instantiateRoute);</td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> $routeMinErr <span class="pl-k">=</span> <span class="pl-smi">angular</span>.<span class="pl-en">$$minErr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>ngRoute<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> isEagerInstantiationEnabled;</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * @ngdoc provider</span></td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-k">@name</span> <span class="pl-en">$routeProvider</span></span></td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-k">@this</span></span></td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-k">@description</span></span></td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Used for configuring routes.</span></td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * ## Example</span></td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * See <span class="pl-en">{<span class="pl-k">@link</span> <span class="pl-smi">ngRoute.$route#examples</span> $route}</span> for an example of configuring and using `ngRoute`.</span></td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * ## Dependencies</span></td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Requires the <span class="pl-en">{<span class="pl-k">@link</span> <span class="pl-smi">ngRoute</span> `ngRoute`}</span> module to be installed.</span></td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">$RouteProvider</span>() {</td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code blob-code-inner js-file-line">  isArray <span class="pl-k">=</span> <span class="pl-smi">angular</span>.<span class="pl-smi">isArray</span>;</td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code blob-code-inner js-file-line">  isObject <span class="pl-k">=</span> <span class="pl-smi">angular</span>.<span class="pl-smi">isObject</span>;</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code blob-code-inner js-file-line">  isDefined <span class="pl-k">=</span> <span class="pl-smi">angular</span>.<span class="pl-smi">isDefined</span>;</td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code blob-code-inner js-file-line">  noop <span class="pl-k">=</span> <span class="pl-smi">angular</span>.<span class="pl-smi">noop</span>;</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">function</span> <span class="pl-en">inherit</span>(<span class="pl-smi">parent</span>, <span class="pl-smi">extra</span>) {</td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-smi">angular</span>.<span class="pl-en">extend</span>(<span class="pl-c1">Object</span>.<span class="pl-en">create</span>(parent), extra);</td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> routes <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * @ngdoc method</span></td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * <span class="pl-k">@name</span> <span class="pl-en">$routeProvider#when</span></span></td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *</span></td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * <span class="pl-k">@param</span> <span class="pl-en">{string}</span> <span class="pl-smi">path</span> Route path (matched against `$location.path`). If `$location.path`</span></td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *    contains redundant trailing slash or is missing one, the route will still match and the</span></td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *    `$location.path` will be updated to add or drop the trailing slash to exactly match the</span></td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *    route definition.</span></td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *</span></td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *    * `path` can contain named groups starting with a colon: e.g. `:name`. All characters up</span></td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *        to the next slash are matched and stored in `$routeParams` under the given `name`</span></td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *        when the route matches.</span></td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *    * `path` can contain named groups starting with a colon and ending with a star:</span></td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *        e.g.`:name*`. All characters are eagerly stored in `$routeParams` under the given `name`</span></td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *        when the route matches.</span></td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *    * `path` can contain optional named groups with a question mark: e.g.`:name?`.</span></td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *</span></td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *    For example, routes like `/color/:color/largecode/:largecode*\/edit` will match</span></td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *    `/color/brown/largecode/code/with/slashes/edit` and extract:</span></td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *</span></td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *    * `color: brown`</span></td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *    * `largecode: code/with/slashes`.</span></td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *</span></td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *</span></td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * <span class="pl-k">@param</span> <span class="pl-en">{Object}</span> <span class="pl-smi">route</span> Mapping information to be assigned to `$route.current` on route</span></td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *    match.</span></td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *</span></td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *    Object properties:</span></td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *</span></td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *    - `controller` – `{(string|Function)=}` – Controller fn that should be associated with</span></td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *      newly created scope or the name of a <span class="pl-en">{<span class="pl-k">@link</span> <span class="pl-smi">angular.Module#controller</span> registered</span></span></td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-en">   *      controller}</span> if passed as a string.</span></td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *    - `controllerAs` – `{string=}` – An identifier name for a reference to the controller.</span></td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *      If present, the controller will be published to scope under the `controllerAs` name.</span></td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *    - `template` – `{(string|Function)=}` – html template as a string or a function that</span></td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *      returns an html template as a string which should be used by <span class="pl-en">{<span class="pl-k">@link</span></span></span></td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-en">   *      ngRoute.directive:ngView ngView}</span> or <span class="pl-en">{<span class="pl-k">@link</span> <span class="pl-smi">ng.directive:ngInclude</span> ngInclude}</span> directives.</span></td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *      This property takes precedence over `templateUrl`.</span></td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *</span></td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *      If `template` is a function, it will be called with the following parameters:</span></td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *</span></td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *      - `{Array.&lt;Object&gt;}` - route parameters extracted from the current</span></td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *        `$location.path()` by applying the current route</span></td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *</span></td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *      One of `template` or `templateUrl` is required.</span></td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *</span></td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *    - `templateUrl` – `{(string|Function)=}` – path or function that returns a path to an html</span></td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *      template that should be used by <span class="pl-en">{<span class="pl-k">@link</span> <span class="pl-smi">ngRoute.directive:ngView</span> ngView}</span>.</span></td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *</span></td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *      If `templateUrl` is a function, it will be called with the following parameters:</span></td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *</span></td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *      - `{Array.&lt;Object&gt;}` - route parameters extracted from the current</span></td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *        `$location.path()` by applying the current route</span></td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *</span></td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *      One of `templateUrl` or `template` is required.</span></td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *</span></td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *    - `resolve` - `{Object.&lt;string, Function&gt;=}` - An optional map of dependencies which should</span></td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *      be injected into the controller. If any of these dependencies are promises, the router</span></td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *      will wait for them all to be resolved or one to be rejected before the controller is</span></td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *      instantiated.</span></td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *      If all the promises are resolved successfully, the values of the resolved promises are</span></td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *      injected and <span class="pl-en">{<span class="pl-k">@link</span> <span class="pl-smi">ngRoute.$route#$routeChangeSuccess</span> $routeChangeSuccess}</span> event is</span></td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *      fired. If any of the promises are rejected the</span></td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *      <span class="pl-en">{<span class="pl-k">@link</span> <span class="pl-smi">ngRoute.$route#$routeChangeError</span> $routeChangeError}</span> event is fired.</span></td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *      For easier access to the resolved dependencies from the template, the `resolve` map will</span></td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *      be available on the scope of the route, under `$resolve` (by default) or a custom name</span></td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *      specified by the `resolveAs` property (see below). This can be particularly useful, when</span></td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *      working with <span class="pl-en">{<span class="pl-k">@link</span> <span class="pl-smi">angular.Module#component</span> components}</span> as route templates.&lt;br /&gt;</span></td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *      &lt;div class=&quot;alert alert-warning&quot;&gt;</span></td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *        **Note:** If your scope already contains a property with this name, it will be hidden</span></td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *        or overwritten. Make sure, you specify an appropriate name for this property, that</span></td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *        does not collide with other properties on the scope.</span></td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *      &lt;/div&gt;</span></td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *      The map object is:</span></td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *</span></td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *      - `key` – `{string}`: a name of a dependency to be injected into the controller.</span></td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *      - `factory` - `{string|Function}`: If `string` then it is an alias for a service.</span></td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *        Otherwise if function, then it is <span class="pl-en">{<span class="pl-k">@link</span> <span class="pl-smi">auto.$injector#invoke</span> injected}</span></span></td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *        and the return value is treated as the dependency. If the result is a promise, it is</span></td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *        resolved before its value is injected into the controller. Be aware that</span></td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *        `ngRoute.$routeParams` will still refer to the previous route within these resolve</span></td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *        functions.  Use `$route.current.params` to access the new route parameters, instead.</span></td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *</span></td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *    - `resolveAs` - `{string=}` - The name under which the `resolve` map will be available on</span></td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *      the scope of the route. If omitted, defaults to `$resolve`.</span></td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *</span></td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *    - `redirectTo` – `{(string|Function)=}` – value to update</span></td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *      <span class="pl-en">{<span class="pl-k">@link</span> <span class="pl-smi">ng.$location</span> $location}</span> path with and trigger route redirection.</span></td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *</span></td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *      If `redirectTo` is a function, it will be called with the following parameters:</span></td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *</span></td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *      - `{Object.&lt;string&gt;}` - route parameters extracted from the current</span></td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *        `$location.path()` by applying the current route templateUrl.</span></td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *      - `{string}` - current `$location.path()`</span></td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *      - `{Object}` - current `$location.search()`</span></td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *</span></td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *      The custom `redirectTo` function is expected to return a string which will be used</span></td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *      to update `$location.url()`. If the function throws an error, no further processing will</span></td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *      take place and the <span class="pl-en">{<span class="pl-k">@link</span> <span class="pl-smi">ngRoute.$route#$routeChangeError</span> $routeChangeError}</span> event will</span></td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *      be fired.</span></td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *</span></td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *      Routes that specify `redirectTo` will not have their controllers, template functions</span></td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *      or resolves called, the `$location` will be changed to the redirect url and route</span></td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *      processing will stop. The exception to this is if the `redirectTo` is a function that</span></td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *      returns `undefined`. In this case the route transition occurs as though there was no</span></td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *      redirection.</span></td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *</span></td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *    - `resolveRedirectTo` – `{Function=}` – a function that will (eventually) return the value</span></td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *      to update <span class="pl-en">{<span class="pl-k">@link</span> <span class="pl-smi">ng.$location</span> $location}</span> URL with and trigger route redirection. In</span></td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *      contrast to `redirectTo`, dependencies can be injected into `resolveRedirectTo` and the</span></td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *      return value can be either a string or a promise that will be resolved to a string.</span></td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *</span></td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *      Similar to `redirectTo`, if the return value is `undefined` (or a promise that gets</span></td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *      resolved to `undefined`), no redirection takes place and the route transition occurs as</span></td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *      though there was no redirection.</span></td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *</span></td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *      If the function throws an error or the returned promise gets rejected, no further</span></td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *      processing will take place and the</span></td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *      <span class="pl-en">{<span class="pl-k">@link</span> <span class="pl-smi">ngRoute.$route#$routeChangeError</span> $routeChangeError}</span> event will be fired.</span></td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *</span></td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *      `redirectTo` takes precedence over `resolveRedirectTo`, so specifying both on the same</span></td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *      route definition, will cause the latter to be ignored.</span></td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *</span></td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *    - `[reloadOnSearch=true]` - `{boolean=}` - reload route when only `$location.search()`</span></td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *      or `$location.hash()` changes.</span></td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *</span></td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *      If the option is set to `false` and url in the browser changes, then</span></td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *      `$routeUpdate` event is broadcasted on the root scope.</span></td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *</span></td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *    - `[caseInsensitiveMatch=false]` - `{boolean=}` - match routes without being case sensitive</span></td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *</span></td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *      If the option is set to `true`, then the particular route can be matched without being</span></td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *      case sensitive</span></td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *</span></td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * <span class="pl-k">@returns</span> <span class="pl-en">{Object}</span> self</span></td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *</span></td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * <span class="pl-k">@description</span></span></td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * Adds a new route definition to the `$route` service.</span></td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-en">when</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">path</span>, <span class="pl-smi">route</span>) {</td>
      </tr>
      <tr>
        <td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span>copy original route object to preserve params inherited from proto chain</span></td>
      </tr>
      <tr>
        <td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> routeCopy <span class="pl-k">=</span> <span class="pl-en">shallowCopy</span>(route);</td>
      </tr>
      <tr>
        <td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-smi">angular</span>.<span class="pl-en">isUndefined</span>(<span class="pl-smi">routeCopy</span>.<span class="pl-smi">reloadOnSearch</span>)) {</td>
      </tr>
      <tr>
        <td id="L238" class="blob-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">routeCopy</span>.<span class="pl-smi">reloadOnSearch</span> <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L239" class="blob-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L240" class="blob-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-smi">angular</span>.<span class="pl-en">isUndefined</span>(<span class="pl-smi">routeCopy</span>.<span class="pl-smi">caseInsensitiveMatch</span>)) {</td>
      </tr>
      <tr>
        <td id="L241" class="blob-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">routeCopy</span>.<span class="pl-smi">caseInsensitiveMatch</span> <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">caseInsensitiveMatch</span>;</td>
      </tr>
      <tr>
        <td id="L242" class="blob-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L243" class="blob-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-code blob-code-inner js-file-line">    routes[path] <span class="pl-k">=</span> <span class="pl-smi">angular</span>.<span class="pl-en">extend</span>(</td>
      </tr>
      <tr>
        <td id="L244" class="blob-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-code blob-code-inner js-file-line">      routeCopy,</td>
      </tr>
      <tr>
        <td id="L245" class="blob-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-code blob-code-inner js-file-line">      path <span class="pl-k">&amp;&amp;</span> <span class="pl-en">pathRegExp</span>(path, routeCopy)</td>
      </tr>
      <tr>
        <td id="L246" class="blob-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-code blob-code-inner js-file-line">    );</td>
      </tr>
      <tr>
        <td id="L247" class="blob-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L248" class="blob-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> create redirection for trailing slashes</span></td>
      </tr>
      <tr>
        <td id="L249" class="blob-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (path) {</td>
      </tr>
      <tr>
        <td id="L250" class="blob-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> redirectPath <span class="pl-k">=</span> (path[<span class="pl-smi">path</span>.<span class="pl-c1">length</span> <span class="pl-k">-</span> <span class="pl-c1">1</span>] <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>/<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L251" class="blob-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">?</span> <span class="pl-smi">path</span>.<span class="pl-c1">substr</span>(<span class="pl-c1">0</span>, <span class="pl-smi">path</span>.<span class="pl-c1">length</span> <span class="pl-k">-</span> <span class="pl-c1">1</span>)</td>
      </tr>
      <tr>
        <td id="L252" class="blob-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">:</span> path <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>/<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L253" class="blob-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L254" class="blob-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-code blob-code-inner js-file-line">      routes[redirectPath] <span class="pl-k">=</span> <span class="pl-smi">angular</span>.<span class="pl-en">extend</span>(</td>
      </tr>
      <tr>
        <td id="L255" class="blob-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-code blob-code-inner js-file-line">        {redirectTo<span class="pl-k">:</span> path},</td>
      </tr>
      <tr>
        <td id="L256" class="blob-num js-line-number" data-line-number="256"></td>
        <td id="LC256" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">pathRegExp</span>(redirectPath, routeCopy)</td>
      </tr>
      <tr>
        <td id="L257" class="blob-num js-line-number" data-line-number="257"></td>
        <td id="LC257" class="blob-code blob-code-inner js-file-line">      );</td>
      </tr>
      <tr>
        <td id="L258" class="blob-num js-line-number" data-line-number="258"></td>
        <td id="LC258" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L259" class="blob-num js-line-number" data-line-number="259"></td>
        <td id="LC259" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L260" class="blob-num js-line-number" data-line-number="260"></td>
        <td id="LC260" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-c1">this</span>;</td>
      </tr>
      <tr>
        <td id="L261" class="blob-num js-line-number" data-line-number="261"></td>
        <td id="LC261" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L262" class="blob-num js-line-number" data-line-number="262"></td>
        <td id="LC262" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L263" class="blob-num js-line-number" data-line-number="263"></td>
        <td id="LC263" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L264" class="blob-num js-line-number" data-line-number="264"></td>
        <td id="LC264" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * @ngdoc property</span></td>
      </tr>
      <tr>
        <td id="L265" class="blob-num js-line-number" data-line-number="265"></td>
        <td id="LC265" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * <span class="pl-k">@name</span> <span class="pl-en">$routeProvider#caseInsensitiveMatch</span></span></td>
      </tr>
      <tr>
        <td id="L266" class="blob-num js-line-number" data-line-number="266"></td>
        <td id="LC266" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * <span class="pl-k">@description</span></span></td>
      </tr>
      <tr>
        <td id="L267" class="blob-num js-line-number" data-line-number="267"></td>
        <td id="LC267" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *</span></td>
      </tr>
      <tr>
        <td id="L268" class="blob-num js-line-number" data-line-number="268"></td>
        <td id="LC268" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * A boolean property indicating if routes defined</span></td>
      </tr>
      <tr>
        <td id="L269" class="blob-num js-line-number" data-line-number="269"></td>
        <td id="LC269" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * using this provider should be matched using a case insensitive</span></td>
      </tr>
      <tr>
        <td id="L270" class="blob-num js-line-number" data-line-number="270"></td>
        <td id="LC270" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * algorithm. Defaults to `false`.</span></td>
      </tr>
      <tr>
        <td id="L271" class="blob-num js-line-number" data-line-number="271"></td>
        <td id="LC271" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L272" class="blob-num js-line-number" data-line-number="272"></td>
        <td id="LC272" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-smi">caseInsensitiveMatch</span> <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L273" class="blob-num js-line-number" data-line-number="273"></td>
        <td id="LC273" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L274" class="blob-num js-line-number" data-line-number="274"></td>
        <td id="LC274" class="blob-code blob-code-inner js-file-line">   <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L275" class="blob-num js-line-number" data-line-number="275"></td>
        <td id="LC275" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * <span class="pl-k">@param</span> <span class="pl-smi">path</span> {string} path</span></td>
      </tr>
      <tr>
        <td id="L276" class="blob-num js-line-number" data-line-number="276"></td>
        <td id="LC276" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * <span class="pl-k">@param</span> <span class="pl-smi">opts</span> {Object} options</span></td>
      </tr>
      <tr>
        <td id="L277" class="blob-num js-line-number" data-line-number="277"></td>
        <td id="LC277" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * <span class="pl-k">@return</span> <span class="pl-en">{?Object}</span></span></td>
      </tr>
      <tr>
        <td id="L278" class="blob-num js-line-number" data-line-number="278"></td>
        <td id="LC278" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    *</span></td>
      </tr>
      <tr>
        <td id="L279" class="blob-num js-line-number" data-line-number="279"></td>
        <td id="LC279" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * <span class="pl-k">@description</span></span></td>
      </tr>
      <tr>
        <td id="L280" class="blob-num js-line-number" data-line-number="280"></td>
        <td id="LC280" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * Normalizes the given path, returning a regular expression</span></td>
      </tr>
      <tr>
        <td id="L281" class="blob-num js-line-number" data-line-number="281"></td>
        <td id="LC281" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * and the original path.</span></td>
      </tr>
      <tr>
        <td id="L282" class="blob-num js-line-number" data-line-number="282"></td>
        <td id="LC282" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    *</span></td>
      </tr>
      <tr>
        <td id="L283" class="blob-num js-line-number" data-line-number="283"></td>
        <td id="LC283" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    * Inspired by pathRexp in visionmedia/express/lib/utils.js.</span></td>
      </tr>
      <tr>
        <td id="L284" class="blob-num js-line-number" data-line-number="284"></td>
        <td id="LC284" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L285" class="blob-num js-line-number" data-line-number="285"></td>
        <td id="LC285" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">function</span> <span class="pl-en">pathRegExp</span>(<span class="pl-smi">path</span>, <span class="pl-smi">opts</span>) {</td>
      </tr>
      <tr>
        <td id="L286" class="blob-num js-line-number" data-line-number="286"></td>
        <td id="LC286" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> insensitive <span class="pl-k">=</span> <span class="pl-smi">opts</span>.<span class="pl-smi">caseInsensitiveMatch</span>,</td>
      </tr>
      <tr>
        <td id="L287" class="blob-num js-line-number" data-line-number="287"></td>
        <td id="LC287" class="blob-code blob-code-inner js-file-line">        ret <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L288" class="blob-num js-line-number" data-line-number="288"></td>
        <td id="LC288" class="blob-code blob-code-inner js-file-line">          originalPath<span class="pl-k">:</span> path,</td>
      </tr>
      <tr>
        <td id="L289" class="blob-num js-line-number" data-line-number="289"></td>
        <td id="LC289" class="blob-code blob-code-inner js-file-line">          regexp<span class="pl-k">:</span> path</td>
      </tr>
      <tr>
        <td id="L290" class="blob-num js-line-number" data-line-number="290"></td>
        <td id="LC290" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L291" class="blob-num js-line-number" data-line-number="291"></td>
        <td id="LC291" class="blob-code blob-code-inner js-file-line">        keys <span class="pl-k">=</span> <span class="pl-smi">ret</span>.<span class="pl-smi">keys</span> <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L292" class="blob-num js-line-number" data-line-number="292"></td>
        <td id="LC292" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L293" class="blob-num js-line-number" data-line-number="293"></td>
        <td id="LC293" class="blob-code blob-code-inner js-file-line">    path <span class="pl-k">=</span> path</td>
      </tr>
      <tr>
        <td id="L294" class="blob-num js-line-number" data-line-number="294"></td>
        <td id="LC294" class="blob-code blob-code-inner js-file-line">      .<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>(<span class="pl-c1">[()<span class="pl-c1">.</span>]</span>)<span class="pl-pds">/</span>g</span>, <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\\</span>$1<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L295" class="blob-num js-line-number" data-line-number="295"></td>
        <td id="LC295" class="blob-code blob-code-inner js-file-line">      .<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>(<span class="pl-cce">\/</span>)<span class="pl-k">?</span>:(<span class="pl-c1">\w</span><span class="pl-k">+</span>)(<span class="pl-cce">\*\?</span><span class="pl-k">|</span><span class="pl-c1">[?*]</span>)<span class="pl-k">?</span><span class="pl-pds">/</span>g</span>, <span class="pl-k">function</span>(<span class="pl-smi">_</span>, <span class="pl-smi">slash</span>, <span class="pl-smi">key</span>, <span class="pl-smi">option</span>) {</td>
      </tr>
      <tr>
        <td id="L296" class="blob-num js-line-number" data-line-number="296"></td>
        <td id="LC296" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> optional <span class="pl-k">=</span> (option <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>?<span class="pl-pds">&#39;</span></span> <span class="pl-k">||</span> option <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>*?<span class="pl-pds">&#39;</span></span>) <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>?<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L297" class="blob-num js-line-number" data-line-number="297"></td>
        <td id="LC297" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> star <span class="pl-k">=</span> (option <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>*<span class="pl-pds">&#39;</span></span> <span class="pl-k">||</span> option <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>*?<span class="pl-pds">&#39;</span></span>) <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>*<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L298" class="blob-num js-line-number" data-line-number="298"></td>
        <td id="LC298" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">keys</span>.<span class="pl-c1">push</span>({ name<span class="pl-k">:</span> key, optional<span class="pl-k">:</span> <span class="pl-k">!!</span>optional });</td>
      </tr>
      <tr>
        <td id="L299" class="blob-num js-line-number" data-line-number="299"></td>
        <td id="LC299" class="blob-code blob-code-inner js-file-line">        slash <span class="pl-k">=</span> slash <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L300" class="blob-num js-line-number" data-line-number="300"></td>
        <td id="LC300" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L301" class="blob-num js-line-number" data-line-number="301"></td>
        <td id="LC301" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">+</span> (optional <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> slash)</td>
      </tr>
      <tr>
        <td id="L302" class="blob-num js-line-number" data-line-number="302"></td>
        <td id="LC302" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>(?:<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L303" class="blob-num js-line-number" data-line-number="303"></td>
        <td id="LC303" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">+</span> (optional <span class="pl-k">?</span> slash <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L304" class="blob-num js-line-number" data-line-number="304"></td>
        <td id="LC304" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">+</span> (star <span class="pl-k">&amp;&amp;</span> <span class="pl-s"><span class="pl-pds">&#39;</span>(.+?)<span class="pl-pds">&#39;</span></span> <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&#39;</span>([^/]+)<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L305" class="blob-num js-line-number" data-line-number="305"></td>
        <td id="LC305" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">+</span> (optional <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L306" class="blob-num js-line-number" data-line-number="306"></td>
        <td id="LC306" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>)<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L307" class="blob-num js-line-number" data-line-number="307"></td>
        <td id="LC307" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">+</span> (optional <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L308" class="blob-num js-line-number" data-line-number="308"></td>
        <td id="LC308" class="blob-code blob-code-inner js-file-line">      })</td>
      </tr>
      <tr>
        <td id="L309" class="blob-num js-line-number" data-line-number="309"></td>
        <td id="LC309" class="blob-code blob-code-inner js-file-line">      .<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>(<span class="pl-c1">[/$*]</span>)<span class="pl-pds">/</span>g</span>, <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\\</span>$1<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L310" class="blob-num js-line-number" data-line-number="310"></td>
        <td id="LC310" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L311" class="blob-num js-line-number" data-line-number="311"></td>
        <td id="LC311" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">ret</span>.<span class="pl-smi">regexp</span> <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">RegExp</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>^<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> path <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>$<span class="pl-pds">&#39;</span></span>, insensitive <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>i<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L312" class="blob-num js-line-number" data-line-number="312"></td>
        <td id="LC312" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> ret;</td>
      </tr>
      <tr>
        <td id="L313" class="blob-num js-line-number" data-line-number="313"></td>
        <td id="LC313" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L314" class="blob-num js-line-number" data-line-number="314"></td>
        <td id="LC314" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L315" class="blob-num js-line-number" data-line-number="315"></td>
        <td id="LC315" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L316" class="blob-num js-line-number" data-line-number="316"></td>
        <td id="LC316" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * @ngdoc method</span></td>
      </tr>
      <tr>
        <td id="L317" class="blob-num js-line-number" data-line-number="317"></td>
        <td id="LC317" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * <span class="pl-k">@name</span> <span class="pl-en">$routeProvider#otherwise</span></span></td>
      </tr>
      <tr>
        <td id="L318" class="blob-num js-line-number" data-line-number="318"></td>
        <td id="LC318" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *</span></td>
      </tr>
      <tr>
        <td id="L319" class="blob-num js-line-number" data-line-number="319"></td>
        <td id="LC319" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * <span class="pl-k">@description</span></span></td>
      </tr>
      <tr>
        <td id="L320" class="blob-num js-line-number" data-line-number="320"></td>
        <td id="LC320" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * Sets route definition that will be used on route change when no other route definition</span></td>
      </tr>
      <tr>
        <td id="L321" class="blob-num js-line-number" data-line-number="321"></td>
        <td id="LC321" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * is matched.</span></td>
      </tr>
      <tr>
        <td id="L322" class="blob-num js-line-number" data-line-number="322"></td>
        <td id="LC322" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *</span></td>
      </tr>
      <tr>
        <td id="L323" class="blob-num js-line-number" data-line-number="323"></td>
        <td id="LC323" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * <span class="pl-k">@param</span> <span class="pl-en">{Object|string}</span> <span class="pl-smi">params</span> Mapping information to be assigned to `$route.current`.</span></td>
      </tr>
      <tr>
        <td id="L324" class="blob-num js-line-number" data-line-number="324"></td>
        <td id="LC324" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * If called with a string, the value maps to `redirectTo`.</span></td>
      </tr>
      <tr>
        <td id="L325" class="blob-num js-line-number" data-line-number="325"></td>
        <td id="LC325" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * <span class="pl-k">@returns</span> <span class="pl-en">{Object}</span> self</span></td>
      </tr>
      <tr>
        <td id="L326" class="blob-num js-line-number" data-line-number="326"></td>
        <td id="LC326" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L327" class="blob-num js-line-number" data-line-number="327"></td>
        <td id="LC327" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-en">otherwise</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">params</span>) {</td>
      </tr>
      <tr>
        <td id="L328" class="blob-num js-line-number" data-line-number="328"></td>
        <td id="LC328" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">typeof</span> params <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L329" class="blob-num js-line-number" data-line-number="329"></td>
        <td id="LC329" class="blob-code blob-code-inner js-file-line">      params <span class="pl-k">=</span> {redirectTo<span class="pl-k">:</span> params};</td>
      </tr>
      <tr>
        <td id="L330" class="blob-num js-line-number" data-line-number="330"></td>
        <td id="LC330" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L331" class="blob-num js-line-number" data-line-number="331"></td>
        <td id="LC331" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">when</span>(<span class="pl-c1">null</span>, params);</td>
      </tr>
      <tr>
        <td id="L332" class="blob-num js-line-number" data-line-number="332"></td>
        <td id="LC332" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-c1">this</span>;</td>
      </tr>
      <tr>
        <td id="L333" class="blob-num js-line-number" data-line-number="333"></td>
        <td id="LC333" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L334" class="blob-num js-line-number" data-line-number="334"></td>
        <td id="LC334" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L335" class="blob-num js-line-number" data-line-number="335"></td>
        <td id="LC335" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L336" class="blob-num js-line-number" data-line-number="336"></td>
        <td id="LC336" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * @ngdoc method</span></td>
      </tr>
      <tr>
        <td id="L337" class="blob-num js-line-number" data-line-number="337"></td>
        <td id="LC337" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * <span class="pl-k">@name</span> <span class="pl-en">$routeProvider#eagerInstantiationEnabled</span></span></td>
      </tr>
      <tr>
        <td id="L338" class="blob-num js-line-number" data-line-number="338"></td>
        <td id="LC338" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * <span class="pl-k">@kind</span> <span class="pl-c1">function</span></span></td>
      </tr>
      <tr>
        <td id="L339" class="blob-num js-line-number" data-line-number="339"></td>
        <td id="LC339" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *</span></td>
      </tr>
      <tr>
        <td id="L340" class="blob-num js-line-number" data-line-number="340"></td>
        <td id="LC340" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * <span class="pl-k">@description</span></span></td>
      </tr>
      <tr>
        <td id="L341" class="blob-num js-line-number" data-line-number="341"></td>
        <td id="LC341" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * Call this method as a setter to enable/disable eager instantiation of the</span></td>
      </tr>
      <tr>
        <td id="L342" class="blob-num js-line-number" data-line-number="342"></td>
        <td id="LC342" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * <span class="pl-en">{<span class="pl-k">@link</span> <span class="pl-smi">ngRoute.$route</span> $route}</span> service upon application bootstrap. You can also call it as a</span></td>
      </tr>
      <tr>
        <td id="L343" class="blob-num js-line-number" data-line-number="343"></td>
        <td id="LC343" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * getter (i.e. without any arguments) to get the current value of the</span></td>
      </tr>
      <tr>
        <td id="L344" class="blob-num js-line-number" data-line-number="344"></td>
        <td id="LC344" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * `eagerInstantiationEnabled` flag.</span></td>
      </tr>
      <tr>
        <td id="L345" class="blob-num js-line-number" data-line-number="345"></td>
        <td id="LC345" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *</span></td>
      </tr>
      <tr>
        <td id="L346" class="blob-num js-line-number" data-line-number="346"></td>
        <td id="LC346" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * Instantiating `$route` early is necessary for capturing the initial</span></td>
      </tr>
      <tr>
        <td id="L347" class="blob-num js-line-number" data-line-number="347"></td>
        <td id="LC347" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * <span class="pl-en">{<span class="pl-k">@link</span> <span class="pl-smi">ng.$location#$locationChangeStart</span> $locationChangeStart}</span> event and navigating to the</span></td>
      </tr>
      <tr>
        <td id="L348" class="blob-num js-line-number" data-line-number="348"></td>
        <td id="LC348" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * appropriate route. Usually, `$route` is instantiated in time by the</span></td>
      </tr>
      <tr>
        <td id="L349" class="blob-num js-line-number" data-line-number="349"></td>
        <td id="LC349" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * <span class="pl-en">{<span class="pl-k">@link</span> <span class="pl-smi">ngRoute.ngView</span> ngView}</span> directive. Yet, in cases where `ngView` is included in an</span></td>
      </tr>
      <tr>
        <td id="L350" class="blob-num js-line-number" data-line-number="350"></td>
        <td id="LC350" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * asynchronously loaded template (e.g. in another directive&#39;s template), the directive factory</span></td>
      </tr>
      <tr>
        <td id="L351" class="blob-num js-line-number" data-line-number="351"></td>
        <td id="LC351" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * might not be called soon enough for `$route` to be instantiated _before_ the initial</span></td>
      </tr>
      <tr>
        <td id="L352" class="blob-num js-line-number" data-line-number="352"></td>
        <td id="LC352" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * `$locationChangeSuccess` event is fired. Eager instantiation ensures that `$route` is always</span></td>
      </tr>
      <tr>
        <td id="L353" class="blob-num js-line-number" data-line-number="353"></td>
        <td id="LC353" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * instantiated in time, regardless of when `ngView` will be loaded.</span></td>
      </tr>
      <tr>
        <td id="L354" class="blob-num js-line-number" data-line-number="354"></td>
        <td id="LC354" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *</span></td>
      </tr>
      <tr>
        <td id="L355" class="blob-num js-line-number" data-line-number="355"></td>
        <td id="LC355" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * The default value is true.</span></td>
      </tr>
      <tr>
        <td id="L356" class="blob-num js-line-number" data-line-number="356"></td>
        <td id="LC356" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *</span></td>
      </tr>
      <tr>
        <td id="L357" class="blob-num js-line-number" data-line-number="357"></td>
        <td id="LC357" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * **Note**:&lt;br /&gt;</span></td>
      </tr>
      <tr>
        <td id="L358" class="blob-num js-line-number" data-line-number="358"></td>
        <td id="LC358" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * You may want to disable the default behavior when unit-testing modules that depend on</span></td>
      </tr>
      <tr>
        <td id="L359" class="blob-num js-line-number" data-line-number="359"></td>
        <td id="LC359" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * `ngRoute`, in order to avoid an unexpected request for the default route&#39;s template.</span></td>
      </tr>
      <tr>
        <td id="L360" class="blob-num js-line-number" data-line-number="360"></td>
        <td id="LC360" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *</span></td>
      </tr>
      <tr>
        <td id="L361" class="blob-num js-line-number" data-line-number="361"></td>
        <td id="LC361" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * <span class="pl-k">@param</span> <span class="pl-en">{boolean=}</span> <span class="pl-smi">enabled</span> - If provided, update the internal `eagerInstantiationEnabled` flag.</span></td>
      </tr>
      <tr>
        <td id="L362" class="blob-num js-line-number" data-line-number="362"></td>
        <td id="LC362" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *</span></td>
      </tr>
      <tr>
        <td id="L363" class="blob-num js-line-number" data-line-number="363"></td>
        <td id="LC363" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   * <span class="pl-k">@returns</span> <span class="pl-en">{*}</span> The current value of the `eagerInstantiationEnabled` flag if used as a getter or</span></td>
      </tr>
      <tr>
        <td id="L364" class="blob-num js-line-number" data-line-number="364"></td>
        <td id="LC364" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   *     itself (for chaining) if used as a setter.</span></td>
      </tr>
      <tr>
        <td id="L365" class="blob-num js-line-number" data-line-number="365"></td>
        <td id="LC365" class="blob-code blob-code-inner js-file-line"><span class="pl-c">   <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L366" class="blob-num js-line-number" data-line-number="366"></td>
        <td id="LC366" class="blob-code blob-code-inner js-file-line">  isEagerInstantiationEnabled <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L367" class="blob-num js-line-number" data-line-number="367"></td>
        <td id="LC367" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-en">eagerInstantiationEnabled</span> <span class="pl-k">=</span> <span class="pl-k">function</span> <span class="pl-en">eagerInstantiationEnabled</span>(<span class="pl-smi">enabled</span>) {</td>
      </tr>
      <tr>
        <td id="L368" class="blob-num js-line-number" data-line-number="368"></td>
        <td id="LC368" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-en">isDefined</span>(enabled)) {</td>
      </tr>
      <tr>
        <td id="L369" class="blob-num js-line-number" data-line-number="369"></td>
        <td id="LC369" class="blob-code blob-code-inner js-file-line">      isEagerInstantiationEnabled <span class="pl-k">=</span> enabled;</td>
      </tr>
      <tr>
        <td id="L370" class="blob-num js-line-number" data-line-number="370"></td>
        <td id="LC370" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-c1">this</span>;</td>
      </tr>
      <tr>
        <td id="L371" class="blob-num js-line-number" data-line-number="371"></td>
        <td id="LC371" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L372" class="blob-num js-line-number" data-line-number="372"></td>
        <td id="LC372" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L373" class="blob-num js-line-number" data-line-number="373"></td>
        <td id="LC373" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> isEagerInstantiationEnabled;</td>
      </tr>
      <tr>
        <td id="L374" class="blob-num js-line-number" data-line-number="374"></td>
        <td id="LC374" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L375" class="blob-num js-line-number" data-line-number="375"></td>
        <td id="LC375" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L376" class="blob-num js-line-number" data-line-number="376"></td>
        <td id="LC376" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L377" class="blob-num js-line-number" data-line-number="377"></td>
        <td id="LC377" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-smi">$get</span> <span class="pl-k">=</span> [<span class="pl-s"><span class="pl-pds">&#39;</span>$rootScope<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L378" class="blob-num js-line-number" data-line-number="378"></td>
        <td id="LC378" class="blob-code blob-code-inner js-file-line">               <span class="pl-s"><span class="pl-pds">&#39;</span>$location<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L379" class="blob-num js-line-number" data-line-number="379"></td>
        <td id="LC379" class="blob-code blob-code-inner js-file-line">               <span class="pl-s"><span class="pl-pds">&#39;</span>$routeParams<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L380" class="blob-num js-line-number" data-line-number="380"></td>
        <td id="LC380" class="blob-code blob-code-inner js-file-line">               <span class="pl-s"><span class="pl-pds">&#39;</span>$q<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L381" class="blob-num js-line-number" data-line-number="381"></td>
        <td id="LC381" class="blob-code blob-code-inner js-file-line">               <span class="pl-s"><span class="pl-pds">&#39;</span>$injector<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L382" class="blob-num js-line-number" data-line-number="382"></td>
        <td id="LC382" class="blob-code blob-code-inner js-file-line">               <span class="pl-s"><span class="pl-pds">&#39;</span>$templateRequest<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L383" class="blob-num js-line-number" data-line-number="383"></td>
        <td id="LC383" class="blob-code blob-code-inner js-file-line">               <span class="pl-s"><span class="pl-pds">&#39;</span>$sce<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L384" class="blob-num js-line-number" data-line-number="384"></td>
        <td id="LC384" class="blob-code blob-code-inner js-file-line">               <span class="pl-s"><span class="pl-pds">&#39;</span>$browser<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L385" class="blob-num js-line-number" data-line-number="385"></td>
        <td id="LC385" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">function</span>(<span class="pl-smi">$rootScope</span>, <span class="pl-smi">$location</span>, <span class="pl-smi">$routeParams</span>, <span class="pl-smi">$q</span>, <span class="pl-smi">$injector</span>, <span class="pl-smi">$templateRequest</span>, <span class="pl-smi">$sce</span>, <span class="pl-smi">$browser</span>) {</td>
      </tr>
      <tr>
        <td id="L386" class="blob-num js-line-number" data-line-number="386"></td>
        <td id="LC386" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L387" class="blob-num js-line-number" data-line-number="387"></td>
        <td id="LC387" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L388" class="blob-num js-line-number" data-line-number="388"></td>
        <td id="LC388" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * @ngdoc service</span></td>
      </tr>
      <tr>
        <td id="L389" class="blob-num js-line-number" data-line-number="389"></td>
        <td id="LC389" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@name</span> <span class="pl-en">$route</span></span></td>
      </tr>
      <tr>
        <td id="L390" class="blob-num js-line-number" data-line-number="390"></td>
        <td id="LC390" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@requires</span> <span class="pl-en">$location</span></span></td>
      </tr>
      <tr>
        <td id="L391" class="blob-num js-line-number" data-line-number="391"></td>
        <td id="LC391" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@requires</span> <span class="pl-en">$routeParams</span></span></td>
      </tr>
      <tr>
        <td id="L392" class="blob-num js-line-number" data-line-number="392"></td>
        <td id="LC392" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *</span></td>
      </tr>
      <tr>
        <td id="L393" class="blob-num js-line-number" data-line-number="393"></td>
        <td id="LC393" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@property</span> <span class="pl-en">{Object}</span> <span class="pl-smi">current</span> Reference to the current route definition.</span></td>
      </tr>
      <tr>
        <td id="L394" class="blob-num js-line-number" data-line-number="394"></td>
        <td id="LC394" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * The route definition contains:</span></td>
      </tr>
      <tr>
        <td id="L395" class="blob-num js-line-number" data-line-number="395"></td>
        <td id="LC395" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *</span></td>
      </tr>
      <tr>
        <td id="L396" class="blob-num js-line-number" data-line-number="396"></td>
        <td id="LC396" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *   - `controller`: The controller constructor as defined in the route definition.</span></td>
      </tr>
      <tr>
        <td id="L397" class="blob-num js-line-number" data-line-number="397"></td>
        <td id="LC397" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *   - `locals`: A map of locals which is used by <span class="pl-en">{<span class="pl-k">@link</span> <span class="pl-smi">ng.$controller</span> $controller}</span> service for</span></td>
      </tr>
      <tr>
        <td id="L398" class="blob-num js-line-number" data-line-number="398"></td>
        <td id="LC398" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *     controller instantiation. The `locals` contain</span></td>
      </tr>
      <tr>
        <td id="L399" class="blob-num js-line-number" data-line-number="399"></td>
        <td id="LC399" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *     the resolved values of the `resolve` map. Additionally the `locals` also contain:</span></td>
      </tr>
      <tr>
        <td id="L400" class="blob-num js-line-number" data-line-number="400"></td>
        <td id="LC400" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *</span></td>
      </tr>
      <tr>
        <td id="L401" class="blob-num js-line-number" data-line-number="401"></td>
        <td id="LC401" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *     - `$scope` - The current route scope.</span></td>
      </tr>
      <tr>
        <td id="L402" class="blob-num js-line-number" data-line-number="402"></td>
        <td id="LC402" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *     - `$template` - The current route template HTML.</span></td>
      </tr>
      <tr>
        <td id="L403" class="blob-num js-line-number" data-line-number="403"></td>
        <td id="LC403" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *</span></td>
      </tr>
      <tr>
        <td id="L404" class="blob-num js-line-number" data-line-number="404"></td>
        <td id="LC404" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *     The `locals` will be assigned to the route scope&#39;s `$resolve` property. You can override</span></td>
      </tr>
      <tr>
        <td id="L405" class="blob-num js-line-number" data-line-number="405"></td>
        <td id="LC405" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *     the property name, using `resolveAs` in the route definition. See</span></td>
      </tr>
      <tr>
        <td id="L406" class="blob-num js-line-number" data-line-number="406"></td>
        <td id="LC406" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *     <span class="pl-en">{<span class="pl-k">@link</span> <span class="pl-smi">ngRoute.$routeProvider</span> $routeProvider}</span> for more info.</span></td>
      </tr>
      <tr>
        <td id="L407" class="blob-num js-line-number" data-line-number="407"></td>
        <td id="LC407" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *</span></td>
      </tr>
      <tr>
        <td id="L408" class="blob-num js-line-number" data-line-number="408"></td>
        <td id="LC408" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@property</span> <span class="pl-en">{Object}</span> <span class="pl-smi">routes</span> Object with all route configuration Objects as its properties.</span></td>
      </tr>
      <tr>
        <td id="L409" class="blob-num js-line-number" data-line-number="409"></td>
        <td id="LC409" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *</span></td>
      </tr>
      <tr>
        <td id="L410" class="blob-num js-line-number" data-line-number="410"></td>
        <td id="LC410" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@description</span></span></td>
      </tr>
      <tr>
        <td id="L411" class="blob-num js-line-number" data-line-number="411"></td>
        <td id="LC411" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * `$route` is used for deep-linking URLs to controllers and views (HTML partials).</span></td>
      </tr>
      <tr>
        <td id="L412" class="blob-num js-line-number" data-line-number="412"></td>
        <td id="LC412" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * It watches `$location.url()` and tries to map the path to an existing route definition.</span></td>
      </tr>
      <tr>
        <td id="L413" class="blob-num js-line-number" data-line-number="413"></td>
        <td id="LC413" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *</span></td>
      </tr>
      <tr>
        <td id="L414" class="blob-num js-line-number" data-line-number="414"></td>
        <td id="LC414" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * Requires the <span class="pl-en">{<span class="pl-k">@link</span> <span class="pl-smi">ngRoute</span> `ngRoute`}</span> module to be installed.</span></td>
      </tr>
      <tr>
        <td id="L415" class="blob-num js-line-number" data-line-number="415"></td>
        <td id="LC415" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *</span></td>
      </tr>
      <tr>
        <td id="L416" class="blob-num js-line-number" data-line-number="416"></td>
        <td id="LC416" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * You can define routes through <span class="pl-en">{<span class="pl-k">@link</span> <span class="pl-smi">ngRoute.$routeProvider</span> $routeProvider}</span>&#39;s API.</span></td>
      </tr>
      <tr>
        <td id="L417" class="blob-num js-line-number" data-line-number="417"></td>
        <td id="LC417" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *</span></td>
      </tr>
      <tr>
        <td id="L418" class="blob-num js-line-number" data-line-number="418"></td>
        <td id="LC418" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * The `$route` service is typically used in conjunction with the</span></td>
      </tr>
      <tr>
        <td id="L419" class="blob-num js-line-number" data-line-number="419"></td>
        <td id="LC419" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-en">{<span class="pl-k">@link</span> <span class="pl-smi">ngRoute.directive:ngView</span> `ngView`}</span> directive and the</span></td>
      </tr>
      <tr>
        <td id="L420" class="blob-num js-line-number" data-line-number="420"></td>
        <td id="LC420" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-en">{<span class="pl-k">@link</span> <span class="pl-smi">ngRoute.$routeParams</span> `$routeParams`}</span> service.</span></td>
      </tr>
      <tr>
        <td id="L421" class="blob-num js-line-number" data-line-number="421"></td>
        <td id="LC421" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *</span></td>
      </tr>
      <tr>
        <td id="L422" class="blob-num js-line-number" data-line-number="422"></td>
        <td id="LC422" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@example</span></span></td>
      </tr>
      <tr>
        <td id="L423" class="blob-num js-line-number" data-line-number="423"></td>
        <td id="LC423" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-s1">This example shows how changing the <span class="pl-c1">URL</span> hash causes the <span class="pl-s"><span class="pl-pds">`</span>$route<span class="pl-pds">`</span></span> to match a route against the</span></span></td>
      </tr>
      <tr>
        <td id="L424" class="blob-num js-line-number" data-line-number="424"></td>
        <td id="LC424" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-s1"><span class="pl-c1">URL</span>, and the <span class="pl-s"><span class="pl-pds">`</span>ngView<span class="pl-pds">`</span></span> pulls <span class="pl-k">in</span> the partial.</span></span></td>
      </tr>
      <tr>
        <td id="L425" class="blob-num js-line-number" data-line-number="425"></td>
        <td id="LC425" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *</span></td>
      </tr>
      <tr>
        <td id="L426" class="blob-num js-line-number" data-line-number="426"></td>
        <td id="LC426" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-s1"><span class="pl-k">&lt;</span>example name<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>$route-service<span class="pl-pds">&quot;</span></span> <span class="pl-c1">module</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>ngRouteExample<span class="pl-pds">&quot;</span></span></span></span></td>
      </tr>
      <tr>
        <td id="L427" class="blob-num js-line-number" data-line-number="427"></td>
        <td id="LC427" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *          <span class="pl-s1">deps<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>angular-route.js<span class="pl-pds">&quot;</span></span> fixBase<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>true<span class="pl-pds">&quot;</span></span><span class="pl-k">&gt;</span></span></span></td>
      </tr>
      <tr>
        <td id="L428" class="blob-num js-line-number" data-line-number="428"></td>
        <td id="LC428" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *   <span class="pl-s1"><span class="pl-k">&lt;</span>file name<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>index.html<span class="pl-pds">&quot;</span></span><span class="pl-k">&gt;</span></span></span></td>
      </tr>
      <tr>
        <td id="L429" class="blob-num js-line-number" data-line-number="429"></td>
        <td id="LC429" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *     <span class="pl-s1"><span class="pl-k">&lt;</span>div ng<span class="pl-k">-</span>controller<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>MainController<span class="pl-pds">&quot;</span></span><span class="pl-k">&gt;</span></span></span></td>
      </tr>
      <tr>
        <td id="L430" class="blob-num js-line-number" data-line-number="430"></td>
        <td id="LC430" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *       <span class="pl-s1">Choose<span class="pl-k">:</span></span></span></td>
      </tr>
      <tr>
        <td id="L431" class="blob-num js-line-number" data-line-number="431"></td>
        <td id="LC431" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *       <span class="pl-s1"><span class="pl-k">&lt;</span>a href<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>Book/Moby<span class="pl-pds">&quot;</span></span><span class="pl-k">&gt;</span>Moby<span class="pl-k">&lt;</span><span class="pl-k">/</span>a<span class="pl-k">&gt;</span> <span class="pl-k">|</span></span></span></td>
      </tr>
      <tr>
        <td id="L432" class="blob-num js-line-number" data-line-number="432"></td>
        <td id="LC432" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *       <span class="pl-s1"><span class="pl-k">&lt;</span>a href<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>Book/Moby/ch/1<span class="pl-pds">&quot;</span></span><span class="pl-k">&gt;</span>Moby<span class="pl-k">:</span> Ch1<span class="pl-k">&lt;</span><span class="pl-k">/</span>a<span class="pl-k">&gt;</span> <span class="pl-k">|</span></span></span></td>
      </tr>
      <tr>
        <td id="L433" class="blob-num js-line-number" data-line-number="433"></td>
        <td id="LC433" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *       <span class="pl-s1"><span class="pl-k">&lt;</span>a href<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>Book/Gatsby<span class="pl-pds">&quot;</span></span><span class="pl-k">&gt;</span>Gatsby<span class="pl-k">&lt;</span><span class="pl-k">/</span>a<span class="pl-k">&gt;</span> <span class="pl-k">|</span></span></span></td>
      </tr>
      <tr>
        <td id="L434" class="blob-num js-line-number" data-line-number="434"></td>
        <td id="LC434" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *       <span class="pl-s1"><span class="pl-k">&lt;</span>a href<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>Book/Gatsby/ch/4?key=value<span class="pl-pds">&quot;</span></span><span class="pl-k">&gt;</span>Gatsby<span class="pl-k">:</span> Ch4<span class="pl-k">&lt;</span><span class="pl-k">/</span>a<span class="pl-k">&gt;</span> <span class="pl-k">|</span></span></span></td>
      </tr>
      <tr>
        <td id="L435" class="blob-num js-line-number" data-line-number="435"></td>
        <td id="LC435" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *       <span class="pl-s1"><span class="pl-k">&lt;</span>a href<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>Book/Scarlet<span class="pl-pds">&quot;</span></span><span class="pl-k">&gt;</span>Scarlet Letter<span class="pl-k">&lt;</span><span class="pl-k">/</span>a<span class="pl-k">&gt;&lt;</span>br<span class="pl-k">/</span><span class="pl-k">&gt;</span></span></span></td>
      </tr>
      <tr>
        <td id="L436" class="blob-num js-line-number" data-line-number="436"></td>
        <td id="LC436" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *</span></td>
      </tr>
      <tr>
        <td id="L437" class="blob-num js-line-number" data-line-number="437"></td>
        <td id="LC437" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *       <span class="pl-s1"><span class="pl-k">&lt;</span>div ng<span class="pl-k">-</span>view<span class="pl-k">&gt;&lt;</span><span class="pl-k">/</span>div<span class="pl-k">&gt;</span></span></span></td>
      </tr>
      <tr>
        <td id="L438" class="blob-num js-line-number" data-line-number="438"></td>
        <td id="LC438" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *</span></td>
      </tr>
      <tr>
        <td id="L439" class="blob-num js-line-number" data-line-number="439"></td>
        <td id="LC439" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *       <span class="pl-s1"><span class="pl-k">&lt;</span>hr <span class="pl-k">/</span><span class="pl-k">&gt;</span></span></span></td>
      </tr>
      <tr>
        <td id="L440" class="blob-num js-line-number" data-line-number="440"></td>
        <td id="LC440" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *</span></td>
      </tr>
      <tr>
        <td id="L441" class="blob-num js-line-number" data-line-number="441"></td>
        <td id="LC441" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *       <span class="pl-s1"><span class="pl-k">&lt;</span>pre<span class="pl-k">&gt;</span><span class="pl-smi">$location</span>.<span class="pl-en">path</span>() <span class="pl-k">=</span> {{<span class="pl-smi">$location</span>.<span class="pl-en">path</span>()}}<span class="pl-k">&lt;</span><span class="pl-k">/</span>pre<span class="pl-k">&gt;</span></span></span></td>
      </tr>
      <tr>
        <td id="L442" class="blob-num js-line-number" data-line-number="442"></td>
        <td id="LC442" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *       <span class="pl-s1"><span class="pl-k">&lt;</span>pre<span class="pl-k">&gt;</span><span class="pl-smi">$route</span>.<span class="pl-c1">current</span>.<span class="pl-smi">templateUrl</span> <span class="pl-k">=</span> {{<span class="pl-smi">$route</span>.<span class="pl-c1">current</span>.<span class="pl-smi">templateUrl</span>}}<span class="pl-k">&lt;</span><span class="pl-k">/</span>pre<span class="pl-k">&gt;</span></span></span></td>
      </tr>
      <tr>
        <td id="L443" class="blob-num js-line-number" data-line-number="443"></td>
        <td id="LC443" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *       <span class="pl-s1"><span class="pl-k">&lt;</span>pre<span class="pl-k">&gt;</span><span class="pl-smi">$route</span>.<span class="pl-c1">current</span>.<span class="pl-smi">params</span> <span class="pl-k">=</span> {{<span class="pl-smi">$route</span>.<span class="pl-c1">current</span>.<span class="pl-smi">params</span>}}<span class="pl-k">&lt;</span><span class="pl-k">/</span>pre<span class="pl-k">&gt;</span></span></span></td>
      </tr>
      <tr>
        <td id="L444" class="blob-num js-line-number" data-line-number="444"></td>
        <td id="LC444" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *       <span class="pl-s1"><span class="pl-k">&lt;</span>pre<span class="pl-k">&gt;</span><span class="pl-smi">$route</span>.<span class="pl-c1">current</span>.<span class="pl-c1">scope</span>.<span class="pl-c1">name</span> <span class="pl-k">=</span> {{<span class="pl-smi">$route</span>.<span class="pl-c1">current</span>.<span class="pl-c1">scope</span>.<span class="pl-c1">name</span>}}<span class="pl-k">&lt;</span><span class="pl-k">/</span>pre<span class="pl-k">&gt;</span></span></span></td>
      </tr>
      <tr>
        <td id="L445" class="blob-num js-line-number" data-line-number="445"></td>
        <td id="LC445" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *       <span class="pl-s1"><span class="pl-k">&lt;</span>pre<span class="pl-k">&gt;</span>$routeParams <span class="pl-k">=</span> {{$routeParams}}<span class="pl-k">&lt;</span><span class="pl-k">/</span>pre<span class="pl-k">&gt;</span></span></span></td>
      </tr>
      <tr>
        <td id="L446" class="blob-num js-line-number" data-line-number="446"></td>
        <td id="LC446" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *     <span class="pl-s1"><span class="pl-k">&lt;</span><span class="pl-k">/</span>div<span class="pl-k">&gt;</span></span></span></td>
      </tr>
      <tr>
        <td id="L447" class="blob-num js-line-number" data-line-number="447"></td>
        <td id="LC447" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *   <span class="pl-s1"><span class="pl-k">&lt;</span><span class="pl-k">/</span>file<span class="pl-k">&gt;</span></span></span></td>
      </tr>
      <tr>
        <td id="L448" class="blob-num js-line-number" data-line-number="448"></td>
        <td id="LC448" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *</span></td>
      </tr>
      <tr>
        <td id="L449" class="blob-num js-line-number" data-line-number="449"></td>
        <td id="LC449" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *   <span class="pl-s1"><span class="pl-k">&lt;</span>file name<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>book.html<span class="pl-pds">&quot;</span></span><span class="pl-k">&gt;</span></span></span></td>
      </tr>
      <tr>
        <td id="L450" class="blob-num js-line-number" data-line-number="450"></td>
        <td id="LC450" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *     <span class="pl-s1">controller<span class="pl-k">:</span> {{name}}<span class="pl-k">&lt;</span>br <span class="pl-k">/</span><span class="pl-k">&gt;</span></span></span></td>
      </tr>
      <tr>
        <td id="L451" class="blob-num js-line-number" data-line-number="451"></td>
        <td id="LC451" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *     <span class="pl-s1">Book Id<span class="pl-k">:</span> {{<span class="pl-smi">params</span>.<span class="pl-smi">bookId</span>}}<span class="pl-k">&lt;</span>br <span class="pl-k">/</span><span class="pl-k">&gt;</span></span></span></td>
      </tr>
      <tr>
        <td id="L452" class="blob-num js-line-number" data-line-number="452"></td>
        <td id="LC452" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *   <span class="pl-s1"><span class="pl-k">&lt;</span><span class="pl-k">/</span>file<span class="pl-k">&gt;</span></span></span></td>
      </tr>
      <tr>
        <td id="L453" class="blob-num js-line-number" data-line-number="453"></td>
        <td id="LC453" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *</span></td>
      </tr>
      <tr>
        <td id="L454" class="blob-num js-line-number" data-line-number="454"></td>
        <td id="LC454" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *   <span class="pl-s1"><span class="pl-k">&lt;</span>file name<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>chapter.html<span class="pl-pds">&quot;</span></span><span class="pl-k">&gt;</span></span></span></td>
      </tr>
      <tr>
        <td id="L455" class="blob-num js-line-number" data-line-number="455"></td>
        <td id="LC455" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *     <span class="pl-s1">controller<span class="pl-k">:</span> {{name}}<span class="pl-k">&lt;</span>br <span class="pl-k">/</span><span class="pl-k">&gt;</span></span></span></td>
      </tr>
      <tr>
        <td id="L456" class="blob-num js-line-number" data-line-number="456"></td>
        <td id="LC456" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *     <span class="pl-s1">Book Id<span class="pl-k">:</span> {{<span class="pl-smi">params</span>.<span class="pl-smi">bookId</span>}}<span class="pl-k">&lt;</span>br <span class="pl-k">/</span><span class="pl-k">&gt;</span></span></span></td>
      </tr>
      <tr>
        <td id="L457" class="blob-num js-line-number" data-line-number="457"></td>
        <td id="LC457" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *     <span class="pl-s1">Chapter Id<span class="pl-k">:</span> {{<span class="pl-smi">params</span>.<span class="pl-smi">chapterId</span>}}</span></span></td>
      </tr>
      <tr>
        <td id="L458" class="blob-num js-line-number" data-line-number="458"></td>
        <td id="LC458" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *   <span class="pl-s1"><span class="pl-k">&lt;</span><span class="pl-k">/</span>file<span class="pl-k">&gt;</span></span></span></td>
      </tr>
      <tr>
        <td id="L459" class="blob-num js-line-number" data-line-number="459"></td>
        <td id="LC459" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *</span></td>
      </tr>
      <tr>
        <td id="L460" class="blob-num js-line-number" data-line-number="460"></td>
        <td id="LC460" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *   <span class="pl-s1"><span class="pl-k">&lt;</span>file name<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>script.js<span class="pl-pds">&quot;</span></span><span class="pl-k">&gt;</span></span></span></td>
      </tr>
      <tr>
        <td id="L461" class="blob-num js-line-number" data-line-number="461"></td>
        <td id="LC461" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *     <span class="pl-s1"><span class="pl-smi">angular</span>.<span class="pl-en">module</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>ngRouteExample<span class="pl-pds">&#39;</span></span>, [<span class="pl-s"><span class="pl-pds">&#39;</span>ngRoute<span class="pl-pds">&#39;</span></span>])</span></span></td>
      </tr>
      <tr>
        <td id="L462" class="blob-num js-line-number" data-line-number="462"></td>
        <td id="LC462" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *</span></td>
      </tr>
      <tr>
        <td id="L463" class="blob-num js-line-number" data-line-number="463"></td>
        <td id="LC463" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *      <span class="pl-s1">.<span class="pl-en">controller</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>MainController<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">$scope</span>, <span class="pl-smi">$route</span>, <span class="pl-smi">$routeParams</span>, <span class="pl-smi">$location</span>) {</span></span></td>
      </tr>
      <tr>
        <td id="L464" class="blob-num js-line-number" data-line-number="464"></td>
        <td id="LC464" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *          <span class="pl-s1"><span class="pl-smi">$scope</span>.<span class="pl-smi">$route</span> <span class="pl-k">=</span> $route;</span></span></td>
      </tr>
      <tr>
        <td id="L465" class="blob-num js-line-number" data-line-number="465"></td>
        <td id="LC465" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *          <span class="pl-s1"><span class="pl-smi">$scope</span>.<span class="pl-smi">$location</span> <span class="pl-k">=</span> $location;</span></span></td>
      </tr>
      <tr>
        <td id="L466" class="blob-num js-line-number" data-line-number="466"></td>
        <td id="LC466" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *          <span class="pl-s1"><span class="pl-smi">$scope</span>.<span class="pl-smi">$routeParams</span> <span class="pl-k">=</span> $routeParams;</span></span></td>
      </tr>
      <tr>
        <td id="L467" class="blob-num js-line-number" data-line-number="467"></td>
        <td id="LC467" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *      <span class="pl-s1">})</span></span></td>
      </tr>
      <tr>
        <td id="L468" class="blob-num js-line-number" data-line-number="468"></td>
        <td id="LC468" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *</span></td>
      </tr>
      <tr>
        <td id="L469" class="blob-num js-line-number" data-line-number="469"></td>
        <td id="LC469" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *      <span class="pl-s1">.<span class="pl-en">controller</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>BookController<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">$scope</span>, <span class="pl-smi">$routeParams</span>) {</span></span></td>
      </tr>
      <tr>
        <td id="L470" class="blob-num js-line-number" data-line-number="470"></td>
        <td id="LC470" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *          <span class="pl-s1"><span class="pl-smi">$scope</span>.<span class="pl-c1">name</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>BookController<span class="pl-pds">&#39;</span></span>;</span></span></td>
      </tr>
      <tr>
        <td id="L471" class="blob-num js-line-number" data-line-number="471"></td>
        <td id="LC471" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *          <span class="pl-s1"><span class="pl-smi">$scope</span>.<span class="pl-smi">params</span> <span class="pl-k">=</span> $routeParams;</span></span></td>
      </tr>
      <tr>
        <td id="L472" class="blob-num js-line-number" data-line-number="472"></td>
        <td id="LC472" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *      <span class="pl-s1">})</span></span></td>
      </tr>
      <tr>
        <td id="L473" class="blob-num js-line-number" data-line-number="473"></td>
        <td id="LC473" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *</span></td>
      </tr>
      <tr>
        <td id="L474" class="blob-num js-line-number" data-line-number="474"></td>
        <td id="LC474" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *      <span class="pl-s1">.<span class="pl-en">controller</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>ChapterController<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">$scope</span>, <span class="pl-smi">$routeParams</span>) {</span></span></td>
      </tr>
      <tr>
        <td id="L475" class="blob-num js-line-number" data-line-number="475"></td>
        <td id="LC475" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *          <span class="pl-s1"><span class="pl-smi">$scope</span>.<span class="pl-c1">name</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>ChapterController<span class="pl-pds">&#39;</span></span>;</span></span></td>
      </tr>
      <tr>
        <td id="L476" class="blob-num js-line-number" data-line-number="476"></td>
        <td id="LC476" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *          <span class="pl-s1"><span class="pl-smi">$scope</span>.<span class="pl-smi">params</span> <span class="pl-k">=</span> $routeParams;</span></span></td>
      </tr>
      <tr>
        <td id="L477" class="blob-num js-line-number" data-line-number="477"></td>
        <td id="LC477" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *      <span class="pl-s1">})</span></span></td>
      </tr>
      <tr>
        <td id="L478" class="blob-num js-line-number" data-line-number="478"></td>
        <td id="LC478" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *</span></td>
      </tr>
      <tr>
        <td id="L479" class="blob-num js-line-number" data-line-number="479"></td>
        <td id="LC479" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *     <span class="pl-s1">.<span class="pl-en">config</span>(<span class="pl-k">function</span>(<span class="pl-smi">$routeProvider</span>, <span class="pl-smi">$locationProvider</span>) {</span></span></td>
      </tr>
      <tr>
        <td id="L480" class="blob-num js-line-number" data-line-number="480"></td>
        <td id="LC480" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *       <span class="pl-s1">$routeProvider</span></span></td>
      </tr>
      <tr>
        <td id="L481" class="blob-num js-line-number" data-line-number="481"></td>
        <td id="LC481" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *        <span class="pl-s1">.<span class="pl-en">when</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>/Book/:bookId<span class="pl-pds">&#39;</span></span>, {</span></span></td>
      </tr>
      <tr>
        <td id="L482" class="blob-num js-line-number" data-line-number="482"></td>
        <td id="LC482" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *         <span class="pl-s1">templateUrl<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>book.html<span class="pl-pds">&#39;</span></span>,</span></span></td>
      </tr>
      <tr>
        <td id="L483" class="blob-num js-line-number" data-line-number="483"></td>
        <td id="LC483" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *         <span class="pl-s1">controller<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>BookController<span class="pl-pds">&#39;</span></span>,</span></span></td>
      </tr>
      <tr>
        <td id="L484" class="blob-num js-line-number" data-line-number="484"></td>
        <td id="LC484" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *         <span class="pl-s1">resolve<span class="pl-k">:</span> {</span></span></td>
      </tr>
      <tr>
        <td id="L485" class="blob-num js-line-number" data-line-number="485"></td>
        <td id="LC485" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *           <span class="pl-s1"><span class="pl-c"><span class="pl-c">//</span> I will cause a 1 second delay</span></span></span></td>
      </tr>
      <tr>
        <td id="L486" class="blob-num js-line-number" data-line-number="486"></td>
        <td id="LC486" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *           <span class="pl-s1"><span class="pl-en">delay</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">$q</span>, <span class="pl-smi">$timeout</span>) {</span></span></td>
      </tr>
      <tr>
        <td id="L487" class="blob-num js-line-number" data-line-number="487"></td>
        <td id="LC487" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *             <span class="pl-s1"><span class="pl-k">var</span> delay <span class="pl-k">=</span> <span class="pl-smi">$q</span>.<span class="pl-c1">defer</span>();</span></span></td>
      </tr>
      <tr>
        <td id="L488" class="blob-num js-line-number" data-line-number="488"></td>
        <td id="LC488" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *             <span class="pl-s1"><span class="pl-en">$timeout</span>(<span class="pl-smi">delay</span>.<span class="pl-smi">resolve</span>, <span class="pl-c1">1000</span>);</span></span></td>
      </tr>
      <tr>
        <td id="L489" class="blob-num js-line-number" data-line-number="489"></td>
        <td id="LC489" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *             <span class="pl-s1"><span class="pl-k">return</span> <span class="pl-smi">delay</span>.<span class="pl-smi">promise</span>;</span></span></td>
      </tr>
      <tr>
        <td id="L490" class="blob-num js-line-number" data-line-number="490"></td>
        <td id="LC490" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *           <span class="pl-s1">}</span></span></td>
      </tr>
      <tr>
        <td id="L491" class="blob-num js-line-number" data-line-number="491"></td>
        <td id="LC491" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *         <span class="pl-s1">}</span></span></td>
      </tr>
      <tr>
        <td id="L492" class="blob-num js-line-number" data-line-number="492"></td>
        <td id="LC492" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *       <span class="pl-s1">})</span></span></td>
      </tr>
      <tr>
        <td id="L493" class="blob-num js-line-number" data-line-number="493"></td>
        <td id="LC493" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *       <span class="pl-s1">.<span class="pl-en">when</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>/Book/:bookId/ch/:chapterId<span class="pl-pds">&#39;</span></span>, {</span></span></td>
      </tr>
      <tr>
        <td id="L494" class="blob-num js-line-number" data-line-number="494"></td>
        <td id="LC494" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *         <span class="pl-s1">templateUrl<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>chapter.html<span class="pl-pds">&#39;</span></span>,</span></span></td>
      </tr>
      <tr>
        <td id="L495" class="blob-num js-line-number" data-line-number="495"></td>
        <td id="LC495" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *         <span class="pl-s1">controller<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>ChapterController<span class="pl-pds">&#39;</span></span></span></span></td>
      </tr>
      <tr>
        <td id="L496" class="blob-num js-line-number" data-line-number="496"></td>
        <td id="LC496" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *       <span class="pl-s1">});</span></span></td>
      </tr>
      <tr>
        <td id="L497" class="blob-num js-line-number" data-line-number="497"></td>
        <td id="LC497" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *</span></td>
      </tr>
      <tr>
        <td id="L498" class="blob-num js-line-number" data-line-number="498"></td>
        <td id="LC498" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *       <span class="pl-s1"><span class="pl-c"><span class="pl-c">//</span> configure html5 to get links working on jsfiddle</span></span></span></td>
      </tr>
      <tr>
        <td id="L499" class="blob-num js-line-number" data-line-number="499"></td>
        <td id="LC499" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *       <span class="pl-s1"><span class="pl-smi">$locationProvider</span>.<span class="pl-en">html5Mode</span>(<span class="pl-c1">true</span>);</span></span></td>
      </tr>
      <tr>
        <td id="L500" class="blob-num js-line-number" data-line-number="500"></td>
        <td id="LC500" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *     <span class="pl-s1">});</span></span></td>
      </tr>
      <tr>
        <td id="L501" class="blob-num js-line-number" data-line-number="501"></td>
        <td id="LC501" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *</span></td>
      </tr>
      <tr>
        <td id="L502" class="blob-num js-line-number" data-line-number="502"></td>
        <td id="LC502" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *   <span class="pl-s1"><span class="pl-k">&lt;</span><span class="pl-k">/</span>file<span class="pl-k">&gt;</span></span></span></td>
      </tr>
      <tr>
        <td id="L503" class="blob-num js-line-number" data-line-number="503"></td>
        <td id="LC503" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *</span></td>
      </tr>
      <tr>
        <td id="L504" class="blob-num js-line-number" data-line-number="504"></td>
        <td id="LC504" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *   <span class="pl-s1"><span class="pl-k">&lt;</span>file name<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>protractor.js<span class="pl-pds">&quot;</span></span> type<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>protractor<span class="pl-pds">&quot;</span></span><span class="pl-k">&gt;</span></span></span></td>
      </tr>
      <tr>
        <td id="L505" class="blob-num js-line-number" data-line-number="505"></td>
        <td id="LC505" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *     <span class="pl-s1"><span class="pl-en">it</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>should load and compile correct template<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span>() {</span></span></td>
      </tr>
      <tr>
        <td id="L506" class="blob-num js-line-number" data-line-number="506"></td>
        <td id="LC506" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *       <span class="pl-s1"><span class="pl-en">element</span>(<span class="pl-smi">by</span>.<span class="pl-en">linkText</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Moby: Ch1<span class="pl-pds">&#39;</span></span>)).<span class="pl-c1">click</span>();</span></span></td>
      </tr>
      <tr>
        <td id="L507" class="blob-num js-line-number" data-line-number="507"></td>
        <td id="LC507" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *       <span class="pl-s1"><span class="pl-k">var</span> content <span class="pl-k">=</span> <span class="pl-en">element</span>(<span class="pl-smi">by</span>.<span class="pl-en">css</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>[ng-view]<span class="pl-pds">&#39;</span></span>)).<span class="pl-en">getText</span>();</span></span></td>
      </tr>
      <tr>
        <td id="L508" class="blob-num js-line-number" data-line-number="508"></td>
        <td id="LC508" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *       <span class="pl-s1"><span class="pl-en">expect</span>(content).<span class="pl-en">toMatch</span>(<span class="pl-sr"><span class="pl-pds">/</span>controller: ChapterController<span class="pl-pds">/</span></span>);</span></span></td>
      </tr>
      <tr>
        <td id="L509" class="blob-num js-line-number" data-line-number="509"></td>
        <td id="LC509" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *       <span class="pl-s1"><span class="pl-en">expect</span>(content).<span class="pl-en">toMatch</span>(<span class="pl-sr"><span class="pl-pds">/</span>Book Id: Moby<span class="pl-pds">/</span></span>);</span></span></td>
      </tr>
      <tr>
        <td id="L510" class="blob-num js-line-number" data-line-number="510"></td>
        <td id="LC510" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *       <span class="pl-s1"><span class="pl-en">expect</span>(content).<span class="pl-en">toMatch</span>(<span class="pl-sr"><span class="pl-pds">/</span>Chapter Id: 1<span class="pl-pds">/</span></span>);</span></span></td>
      </tr>
      <tr>
        <td id="L511" class="blob-num js-line-number" data-line-number="511"></td>
        <td id="LC511" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *</span></td>
      </tr>
      <tr>
        <td id="L512" class="blob-num js-line-number" data-line-number="512"></td>
        <td id="LC512" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *       <span class="pl-s1"><span class="pl-en">element</span>(<span class="pl-smi">by</span>.<span class="pl-en">partialLinkText</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Scarlet<span class="pl-pds">&#39;</span></span>)).<span class="pl-c1">click</span>();</span></span></td>
      </tr>
      <tr>
        <td id="L513" class="blob-num js-line-number" data-line-number="513"></td>
        <td id="LC513" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *</span></td>
      </tr>
      <tr>
        <td id="L514" class="blob-num js-line-number" data-line-number="514"></td>
        <td id="LC514" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *       <span class="pl-s1">content <span class="pl-k">=</span> <span class="pl-en">element</span>(<span class="pl-smi">by</span>.<span class="pl-en">css</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>[ng-view]<span class="pl-pds">&#39;</span></span>)).<span class="pl-en">getText</span>();</span></span></td>
      </tr>
      <tr>
        <td id="L515" class="blob-num js-line-number" data-line-number="515"></td>
        <td id="LC515" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *       <span class="pl-s1"><span class="pl-en">expect</span>(content).<span class="pl-en">toMatch</span>(<span class="pl-sr"><span class="pl-pds">/</span>controller: BookController<span class="pl-pds">/</span></span>);</span></span></td>
      </tr>
      <tr>
        <td id="L516" class="blob-num js-line-number" data-line-number="516"></td>
        <td id="LC516" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *       <span class="pl-s1"><span class="pl-en">expect</span>(content).<span class="pl-en">toMatch</span>(<span class="pl-sr"><span class="pl-pds">/</span>Book Id: Scarlet<span class="pl-pds">/</span></span>);</span></span></td>
      </tr>
      <tr>
        <td id="L517" class="blob-num js-line-number" data-line-number="517"></td>
        <td id="LC517" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *     <span class="pl-s1">});</span></span></td>
      </tr>
      <tr>
        <td id="L518" class="blob-num js-line-number" data-line-number="518"></td>
        <td id="LC518" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *   <span class="pl-s1"><span class="pl-k">&lt;</span><span class="pl-k">/</span>file<span class="pl-k">&gt;</span></span></span></td>
      </tr>
      <tr>
        <td id="L519" class="blob-num js-line-number" data-line-number="519"></td>
        <td id="LC519" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-s1"><span class="pl-k">&lt;</span><span class="pl-k">/</span>example<span class="pl-k">&gt;</span></span></span></td>
      </tr>
      <tr>
        <td id="L520" class="blob-num js-line-number" data-line-number="520"></td>
        <td id="LC520" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L521" class="blob-num js-line-number" data-line-number="521"></td>
        <td id="LC521" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L522" class="blob-num js-line-number" data-line-number="522"></td>
        <td id="LC522" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L523" class="blob-num js-line-number" data-line-number="523"></td>
        <td id="LC523" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * @ngdoc event</span></td>
      </tr>
      <tr>
        <td id="L524" class="blob-num js-line-number" data-line-number="524"></td>
        <td id="LC524" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@name</span> <span class="pl-en">$route#$routeChangeStart</span></span></td>
      </tr>
      <tr>
        <td id="L525" class="blob-num js-line-number" data-line-number="525"></td>
        <td id="LC525" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * @eventType broadcast on root scope</span></td>
      </tr>
      <tr>
        <td id="L526" class="blob-num js-line-number" data-line-number="526"></td>
        <td id="LC526" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@description</span></span></td>
      </tr>
      <tr>
        <td id="L527" class="blob-num js-line-number" data-line-number="527"></td>
        <td id="LC527" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * Broadcasted before a route change. At this  point the route services starts</span></td>
      </tr>
      <tr>
        <td id="L528" class="blob-num js-line-number" data-line-number="528"></td>
        <td id="LC528" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * resolving all of the dependencies needed for the route change to occur.</span></td>
      </tr>
      <tr>
        <td id="L529" class="blob-num js-line-number" data-line-number="529"></td>
        <td id="LC529" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * Typically this involves fetching the view template as well as any dependencies</span></td>
      </tr>
      <tr>
        <td id="L530" class="blob-num js-line-number" data-line-number="530"></td>
        <td id="LC530" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * defined in `resolve` route property. Once  all of the dependencies are resolved</span></td>
      </tr>
      <tr>
        <td id="L531" class="blob-num js-line-number" data-line-number="531"></td>
        <td id="LC531" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * `$routeChangeSuccess` is fired.</span></td>
      </tr>
      <tr>
        <td id="L532" class="blob-num js-line-number" data-line-number="532"></td>
        <td id="LC532" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *</span></td>
      </tr>
      <tr>
        <td id="L533" class="blob-num js-line-number" data-line-number="533"></td>
        <td id="LC533" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * The route change (and the `$location` change that triggered it) can be prevented</span></td>
      </tr>
      <tr>
        <td id="L534" class="blob-num js-line-number" data-line-number="534"></td>
        <td id="LC534" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * by calling `preventDefault` method of the event. See <span class="pl-en">{<span class="pl-k">@link</span> <span class="pl-smi">ng.$rootScope.Scope#$on</span>}</span></span></td>
      </tr>
      <tr>
        <td id="L535" class="blob-num js-line-number" data-line-number="535"></td>
        <td id="LC535" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * for more details about event object.</span></td>
      </tr>
      <tr>
        <td id="L536" class="blob-num js-line-number" data-line-number="536"></td>
        <td id="LC536" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *</span></td>
      </tr>
      <tr>
        <td id="L537" class="blob-num js-line-number" data-line-number="537"></td>
        <td id="LC537" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@param</span> <span class="pl-en">{Object}</span> <span class="pl-smi">angularEvent</span> Synthetic event object.</span></td>
      </tr>
      <tr>
        <td id="L538" class="blob-num js-line-number" data-line-number="538"></td>
        <td id="LC538" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@param</span> <span class="pl-en">{Route}</span> <span class="pl-smi">next</span> Future route information.</span></td>
      </tr>
      <tr>
        <td id="L539" class="blob-num js-line-number" data-line-number="539"></td>
        <td id="LC539" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@param</span> <span class="pl-en">{Route}</span> <span class="pl-smi">current</span> Current route information.</span></td>
      </tr>
      <tr>
        <td id="L540" class="blob-num js-line-number" data-line-number="540"></td>
        <td id="LC540" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L541" class="blob-num js-line-number" data-line-number="541"></td>
        <td id="LC541" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L542" class="blob-num js-line-number" data-line-number="542"></td>
        <td id="LC542" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L543" class="blob-num js-line-number" data-line-number="543"></td>
        <td id="LC543" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * @ngdoc event</span></td>
      </tr>
      <tr>
        <td id="L544" class="blob-num js-line-number" data-line-number="544"></td>
        <td id="LC544" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@name</span> <span class="pl-en">$route#$routeChangeSuccess</span></span></td>
      </tr>
      <tr>
        <td id="L545" class="blob-num js-line-number" data-line-number="545"></td>
        <td id="LC545" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * @eventType broadcast on root scope</span></td>
      </tr>
      <tr>
        <td id="L546" class="blob-num js-line-number" data-line-number="546"></td>
        <td id="LC546" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@description</span></span></td>
      </tr>
      <tr>
        <td id="L547" class="blob-num js-line-number" data-line-number="547"></td>
        <td id="LC547" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * Broadcasted after a route change has happened successfully.</span></td>
      </tr>
      <tr>
        <td id="L548" class="blob-num js-line-number" data-line-number="548"></td>
        <td id="LC548" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * The `resolve` dependencies are now available in the `current.locals` property.</span></td>
      </tr>
      <tr>
        <td id="L549" class="blob-num js-line-number" data-line-number="549"></td>
        <td id="LC549" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *</span></td>
      </tr>
      <tr>
        <td id="L550" class="blob-num js-line-number" data-line-number="550"></td>
        <td id="LC550" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-en">{<span class="pl-k">@link</span> <span class="pl-smi">ngRoute.directive:ngView</span> ngView}</span> listens for the directive</span></td>
      </tr>
      <tr>
        <td id="L551" class="blob-num js-line-number" data-line-number="551"></td>
        <td id="LC551" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * to instantiate the controller and render the view.</span></td>
      </tr>
      <tr>
        <td id="L552" class="blob-num js-line-number" data-line-number="552"></td>
        <td id="LC552" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *</span></td>
      </tr>
      <tr>
        <td id="L553" class="blob-num js-line-number" data-line-number="553"></td>
        <td id="LC553" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@param</span> <span class="pl-en">{Object}</span> <span class="pl-smi">angularEvent</span> Synthetic event object.</span></td>
      </tr>
      <tr>
        <td id="L554" class="blob-num js-line-number" data-line-number="554"></td>
        <td id="LC554" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@param</span> <span class="pl-en">{Route}</span> <span class="pl-smi">current</span> Current route information.</span></td>
      </tr>
      <tr>
        <td id="L555" class="blob-num js-line-number" data-line-number="555"></td>
        <td id="LC555" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@param</span> <span class="pl-en">{Route|Undefined}</span> <span class="pl-smi">previous</span> Previous route information, or undefined if current is</span></td>
      </tr>
      <tr>
        <td id="L556" class="blob-num js-line-number" data-line-number="556"></td>
        <td id="LC556" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * first route entered.</span></td>
      </tr>
      <tr>
        <td id="L557" class="blob-num js-line-number" data-line-number="557"></td>
        <td id="LC557" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L558" class="blob-num js-line-number" data-line-number="558"></td>
        <td id="LC558" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L559" class="blob-num js-line-number" data-line-number="559"></td>
        <td id="LC559" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L560" class="blob-num js-line-number" data-line-number="560"></td>
        <td id="LC560" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * @ngdoc event</span></td>
      </tr>
      <tr>
        <td id="L561" class="blob-num js-line-number" data-line-number="561"></td>
        <td id="LC561" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@name</span> <span class="pl-en">$route#$routeChangeError</span></span></td>
      </tr>
      <tr>
        <td id="L562" class="blob-num js-line-number" data-line-number="562"></td>
        <td id="LC562" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * @eventType broadcast on root scope</span></td>
      </tr>
      <tr>
        <td id="L563" class="blob-num js-line-number" data-line-number="563"></td>
        <td id="LC563" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@description</span></span></td>
      </tr>
      <tr>
        <td id="L564" class="blob-num js-line-number" data-line-number="564"></td>
        <td id="LC564" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * Broadcasted if a redirection function fails or any redirection or resolve promises are</span></td>
      </tr>
      <tr>
        <td id="L565" class="blob-num js-line-number" data-line-number="565"></td>
        <td id="LC565" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * rejected.</span></td>
      </tr>
      <tr>
        <td id="L566" class="blob-num js-line-number" data-line-number="566"></td>
        <td id="LC566" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *</span></td>
      </tr>
      <tr>
        <td id="L567" class="blob-num js-line-number" data-line-number="567"></td>
        <td id="LC567" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@param</span> <span class="pl-en">{Object}</span> <span class="pl-smi">angularEvent</span> Synthetic event object</span></td>
      </tr>
      <tr>
        <td id="L568" class="blob-num js-line-number" data-line-number="568"></td>
        <td id="LC568" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@param</span> <span class="pl-en">{Route}</span> <span class="pl-smi">current</span> Current route information.</span></td>
      </tr>
      <tr>
        <td id="L569" class="blob-num js-line-number" data-line-number="569"></td>
        <td id="LC569" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@param</span> <span class="pl-en">{Route}</span> <span class="pl-smi">previous</span> Previous route information.</span></td>
      </tr>
      <tr>
        <td id="L570" class="blob-num js-line-number" data-line-number="570"></td>
        <td id="LC570" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@param</span> <span class="pl-en">{Route}</span> <span class="pl-smi">rejection</span> The thrown error or the rejection reason of the promise. Usually</span></td>
      </tr>
      <tr>
        <td id="L571" class="blob-num js-line-number" data-line-number="571"></td>
        <td id="LC571" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * the rejection reason is the error that caused the promise to get rejected.</span></td>
      </tr>
      <tr>
        <td id="L572" class="blob-num js-line-number" data-line-number="572"></td>
        <td id="LC572" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L573" class="blob-num js-line-number" data-line-number="573"></td>
        <td id="LC573" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L574" class="blob-num js-line-number" data-line-number="574"></td>
        <td id="LC574" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L575" class="blob-num js-line-number" data-line-number="575"></td>
        <td id="LC575" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * @ngdoc event</span></td>
      </tr>
      <tr>
        <td id="L576" class="blob-num js-line-number" data-line-number="576"></td>
        <td id="LC576" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@name</span> <span class="pl-en">$route#$routeUpdate</span></span></td>
      </tr>
      <tr>
        <td id="L577" class="blob-num js-line-number" data-line-number="577"></td>
        <td id="LC577" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * @eventType broadcast on root scope</span></td>
      </tr>
      <tr>
        <td id="L578" class="blob-num js-line-number" data-line-number="578"></td>
        <td id="LC578" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@description</span></span></td>
      </tr>
      <tr>
        <td id="L579" class="blob-num js-line-number" data-line-number="579"></td>
        <td id="LC579" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * The `reloadOnSearch` property has been set to false, and we are reusing the same</span></td>
      </tr>
      <tr>
        <td id="L580" class="blob-num js-line-number" data-line-number="580"></td>
        <td id="LC580" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * instance of the Controller.</span></td>
      </tr>
      <tr>
        <td id="L581" class="blob-num js-line-number" data-line-number="581"></td>
        <td id="LC581" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *</span></td>
      </tr>
      <tr>
        <td id="L582" class="blob-num js-line-number" data-line-number="582"></td>
        <td id="LC582" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@param</span> <span class="pl-en">{Object}</span> <span class="pl-smi">angularEvent</span> Synthetic event object</span></td>
      </tr>
      <tr>
        <td id="L583" class="blob-num js-line-number" data-line-number="583"></td>
        <td id="LC583" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@param</span> <span class="pl-en">{Route}</span> <span class="pl-smi">current</span> Current/previous route information.</span></td>
      </tr>
      <tr>
        <td id="L584" class="blob-num js-line-number" data-line-number="584"></td>
        <td id="LC584" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L585" class="blob-num js-line-number" data-line-number="585"></td>
        <td id="LC585" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L586" class="blob-num js-line-number" data-line-number="586"></td>
        <td id="LC586" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> forceReload <span class="pl-k">=</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L587" class="blob-num js-line-number" data-line-number="587"></td>
        <td id="LC587" class="blob-code blob-code-inner js-file-line">        preparedRoute,</td>
      </tr>
      <tr>
        <td id="L588" class="blob-num js-line-number" data-line-number="588"></td>
        <td id="LC588" class="blob-code blob-code-inner js-file-line">        preparedRouteIsUpdateOnly,</td>
      </tr>
      <tr>
        <td id="L589" class="blob-num js-line-number" data-line-number="589"></td>
        <td id="LC589" class="blob-code blob-code-inner js-file-line">        $route <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L590" class="blob-num js-line-number" data-line-number="590"></td>
        <td id="LC590" class="blob-code blob-code-inner js-file-line">          routes<span class="pl-k">:</span> routes,</td>
      </tr>
      <tr>
        <td id="L591" class="blob-num js-line-number" data-line-number="591"></td>
        <td id="LC591" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L592" class="blob-num js-line-number" data-line-number="592"></td>
        <td id="LC592" class="blob-code blob-code-inner js-file-line">          <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L593" class="blob-num js-line-number" data-line-number="593"></td>
        <td id="LC593" class="blob-code blob-code-inner js-file-line"><span class="pl-c">           * @ngdoc method</span></td>
      </tr>
      <tr>
        <td id="L594" class="blob-num js-line-number" data-line-number="594"></td>
        <td id="LC594" class="blob-code blob-code-inner js-file-line"><span class="pl-c">           * <span class="pl-k">@name</span> <span class="pl-en">$route#reload</span></span></td>
      </tr>
      <tr>
        <td id="L595" class="blob-num js-line-number" data-line-number="595"></td>
        <td id="LC595" class="blob-code blob-code-inner js-file-line"><span class="pl-c">           *</span></td>
      </tr>
      <tr>
        <td id="L596" class="blob-num js-line-number" data-line-number="596"></td>
        <td id="LC596" class="blob-code blob-code-inner js-file-line"><span class="pl-c">           * <span class="pl-k">@description</span></span></td>
      </tr>
      <tr>
        <td id="L597" class="blob-num js-line-number" data-line-number="597"></td>
        <td id="LC597" class="blob-code blob-code-inner js-file-line"><span class="pl-c">           * Causes `$route` service to reload the current route even if</span></td>
      </tr>
      <tr>
        <td id="L598" class="blob-num js-line-number" data-line-number="598"></td>
        <td id="LC598" class="blob-code blob-code-inner js-file-line"><span class="pl-c">           * <span class="pl-en">{<span class="pl-k">@link</span> <span class="pl-smi">ng.$location</span> $location}</span> hasn&#39;t changed.</span></td>
      </tr>
      <tr>
        <td id="L599" class="blob-num js-line-number" data-line-number="599"></td>
        <td id="LC599" class="blob-code blob-code-inner js-file-line"><span class="pl-c">           *</span></td>
      </tr>
      <tr>
        <td id="L600" class="blob-num js-line-number" data-line-number="600"></td>
        <td id="LC600" class="blob-code blob-code-inner js-file-line"><span class="pl-c">           * As a result of that, <span class="pl-en">{<span class="pl-k">@link</span> <span class="pl-smi">ngRoute.directive:ngView</span> ngView}</span></span></td>
      </tr>
      <tr>
        <td id="L601" class="blob-num js-line-number" data-line-number="601"></td>
        <td id="LC601" class="blob-code blob-code-inner js-file-line"><span class="pl-c">           * creates new scope and reinstantiates the controller.</span></td>
      </tr>
      <tr>
        <td id="L602" class="blob-num js-line-number" data-line-number="602"></td>
        <td id="LC602" class="blob-code blob-code-inner js-file-line"><span class="pl-c">           <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L603" class="blob-num js-line-number" data-line-number="603"></td>
        <td id="LC603" class="blob-code blob-code-inner js-file-line">          <span class="pl-en">reload</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L604" class="blob-num js-line-number" data-line-number="604"></td>
        <td id="LC604" class="blob-code blob-code-inner js-file-line">            forceReload <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L605" class="blob-num js-line-number" data-line-number="605"></td>
        <td id="LC605" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L606" class="blob-num js-line-number" data-line-number="606"></td>
        <td id="LC606" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> fakeLocationEvent <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L607" class="blob-num js-line-number" data-line-number="607"></td>
        <td id="LC607" class="blob-code blob-code-inner js-file-line">              defaultPrevented<span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L608" class="blob-num js-line-number" data-line-number="608"></td>
        <td id="LC608" class="blob-code blob-code-inner js-file-line">              <span class="pl-en">preventDefault</span><span class="pl-k">:</span> <span class="pl-k">function</span> <span class="pl-en">fakePreventDefault</span>() {</td>
      </tr>
      <tr>
        <td id="L609" class="blob-num js-line-number" data-line-number="609"></td>
        <td id="LC609" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">this</span>.<span class="pl-smi">defaultPrevented</span> <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L610" class="blob-num js-line-number" data-line-number="610"></td>
        <td id="LC610" class="blob-code blob-code-inner js-file-line">                forceReload <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L611" class="blob-num js-line-number" data-line-number="611"></td>
        <td id="LC611" class="blob-code blob-code-inner js-file-line">              }</td>
      </tr>
      <tr>
        <td id="L612" class="blob-num js-line-number" data-line-number="612"></td>
        <td id="LC612" class="blob-code blob-code-inner js-file-line">            };</td>
      </tr>
      <tr>
        <td id="L613" class="blob-num js-line-number" data-line-number="613"></td>
        <td id="LC613" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L614" class="blob-num js-line-number" data-line-number="614"></td>
        <td id="LC614" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">$rootScope</span>.<span class="pl-en">$evalAsync</span>(<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L615" class="blob-num js-line-number" data-line-number="615"></td>
        <td id="LC615" class="blob-code blob-code-inner js-file-line">              <span class="pl-en">prepareRoute</span>(fakeLocationEvent);</td>
      </tr>
      <tr>
        <td id="L616" class="blob-num js-line-number" data-line-number="616"></td>
        <td id="LC616" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">fakeLocationEvent</span>.<span class="pl-smi">defaultPrevented</span>) <span class="pl-en">commitRoute</span>();</td>
      </tr>
      <tr>
        <td id="L617" class="blob-num js-line-number" data-line-number="617"></td>
        <td id="LC617" class="blob-code blob-code-inner js-file-line">            });</td>
      </tr>
      <tr>
        <td id="L618" class="blob-num js-line-number" data-line-number="618"></td>
        <td id="LC618" class="blob-code blob-code-inner js-file-line">          },</td>
      </tr>
      <tr>
        <td id="L619" class="blob-num js-line-number" data-line-number="619"></td>
        <td id="LC619" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L620" class="blob-num js-line-number" data-line-number="620"></td>
        <td id="LC620" class="blob-code blob-code-inner js-file-line">          <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L621" class="blob-num js-line-number" data-line-number="621"></td>
        <td id="LC621" class="blob-code blob-code-inner js-file-line"><span class="pl-c">           * @ngdoc method</span></td>
      </tr>
      <tr>
        <td id="L622" class="blob-num js-line-number" data-line-number="622"></td>
        <td id="LC622" class="blob-code blob-code-inner js-file-line"><span class="pl-c">           * <span class="pl-k">@name</span> <span class="pl-en">$route#updateParams</span></span></td>
      </tr>
      <tr>
        <td id="L623" class="blob-num js-line-number" data-line-number="623"></td>
        <td id="LC623" class="blob-code blob-code-inner js-file-line"><span class="pl-c">           *</span></td>
      </tr>
      <tr>
        <td id="L624" class="blob-num js-line-number" data-line-number="624"></td>
        <td id="LC624" class="blob-code blob-code-inner js-file-line"><span class="pl-c">           * <span class="pl-k">@description</span></span></td>
      </tr>
      <tr>
        <td id="L625" class="blob-num js-line-number" data-line-number="625"></td>
        <td id="LC625" class="blob-code blob-code-inner js-file-line"><span class="pl-c">           * Causes `$route` service to update the current URL, replacing</span></td>
      </tr>
      <tr>
        <td id="L626" class="blob-num js-line-number" data-line-number="626"></td>
        <td id="LC626" class="blob-code blob-code-inner js-file-line"><span class="pl-c">           * current route parameters with those specified in `newParams`.</span></td>
      </tr>
      <tr>
        <td id="L627" class="blob-num js-line-number" data-line-number="627"></td>
        <td id="LC627" class="blob-code blob-code-inner js-file-line"><span class="pl-c">           * Provided property names that match the route&#39;s path segment</span></td>
      </tr>
      <tr>
        <td id="L628" class="blob-num js-line-number" data-line-number="628"></td>
        <td id="LC628" class="blob-code blob-code-inner js-file-line"><span class="pl-c">           * definitions will be interpolated into the location&#39;s path, while</span></td>
      </tr>
      <tr>
        <td id="L629" class="blob-num js-line-number" data-line-number="629"></td>
        <td id="LC629" class="blob-code blob-code-inner js-file-line"><span class="pl-c">           * remaining properties will be treated as query params.</span></td>
      </tr>
      <tr>
        <td id="L630" class="blob-num js-line-number" data-line-number="630"></td>
        <td id="LC630" class="blob-code blob-code-inner js-file-line"><span class="pl-c">           *</span></td>
      </tr>
      <tr>
        <td id="L631" class="blob-num js-line-number" data-line-number="631"></td>
        <td id="LC631" class="blob-code blob-code-inner js-file-line"><span class="pl-c">           * <span class="pl-k">@param</span> <span class="pl-en">{!Object&lt;string, string&gt;}</span> <span class="pl-smi">newParams</span> mapping of URL parameter names to values</span></td>
      </tr>
      <tr>
        <td id="L632" class="blob-num js-line-number" data-line-number="632"></td>
        <td id="LC632" class="blob-code blob-code-inner js-file-line"><span class="pl-c">           <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L633" class="blob-num js-line-number" data-line-number="633"></td>
        <td id="LC633" class="blob-code blob-code-inner js-file-line">          <span class="pl-en">updateParams</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">newParams</span>) {</td>
      </tr>
      <tr>
        <td id="L634" class="blob-num js-line-number" data-line-number="634"></td>
        <td id="LC634" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-c1">current</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">this</span>.<span class="pl-c1">current</span>.<span class="pl-smi">$$route</span>) {</td>
      </tr>
      <tr>
        <td id="L635" class="blob-num js-line-number" data-line-number="635"></td>
        <td id="LC635" class="blob-code blob-code-inner js-file-line">              newParams <span class="pl-k">=</span> <span class="pl-smi">angular</span>.<span class="pl-en">extend</span>({}, <span class="pl-c1">this</span>.<span class="pl-c1">current</span>.<span class="pl-smi">params</span>, newParams);</td>
      </tr>
      <tr>
        <td id="L636" class="blob-num js-line-number" data-line-number="636"></td>
        <td id="LC636" class="blob-code blob-code-inner js-file-line">              <span class="pl-smi">$location</span>.<span class="pl-en">path</span>(<span class="pl-en">interpolate</span>(<span class="pl-c1">this</span>.<span class="pl-c1">current</span>.<span class="pl-smi">$$route</span>.<span class="pl-smi">originalPath</span>, newParams));</td>
      </tr>
      <tr>
        <td id="L637" class="blob-num js-line-number" data-line-number="637"></td>
        <td id="LC637" class="blob-code blob-code-inner js-file-line">              <span class="pl-c"><span class="pl-c">//</span> interpolate modifies newParams, only query params are left</span></td>
      </tr>
      <tr>
        <td id="L638" class="blob-num js-line-number" data-line-number="638"></td>
        <td id="LC638" class="blob-code blob-code-inner js-file-line">              <span class="pl-smi">$location</span>.<span class="pl-c1">search</span>(newParams);</td>
      </tr>
      <tr>
        <td id="L639" class="blob-num js-line-number" data-line-number="639"></td>
        <td id="LC639" class="blob-code blob-code-inner js-file-line">            } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L640" class="blob-num js-line-number" data-line-number="640"></td>
        <td id="LC640" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">throw</span> <span class="pl-en">$routeMinErr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>norout<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Tried updating route when with no current route<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L641" class="blob-num js-line-number" data-line-number="641"></td>
        <td id="LC641" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L642" class="blob-num js-line-number" data-line-number="642"></td>
        <td id="LC642" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L643" class="blob-num js-line-number" data-line-number="643"></td>
        <td id="LC643" class="blob-code blob-code-inner js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L644" class="blob-num js-line-number" data-line-number="644"></td>
        <td id="LC644" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L645" class="blob-num js-line-number" data-line-number="645"></td>
        <td id="LC645" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">$rootScope</span>.<span class="pl-en">$on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>$locationChangeStart<span class="pl-pds">&#39;</span></span>, prepareRoute);</td>
      </tr>
      <tr>
        <td id="L646" class="blob-num js-line-number" data-line-number="646"></td>
        <td id="LC646" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">$rootScope</span>.<span class="pl-en">$on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>$locationChangeSuccess<span class="pl-pds">&#39;</span></span>, commitRoute);</td>
      </tr>
      <tr>
        <td id="L647" class="blob-num js-line-number" data-line-number="647"></td>
        <td id="LC647" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L648" class="blob-num js-line-number" data-line-number="648"></td>
        <td id="LC648" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> $route;</td>
      </tr>
      <tr>
        <td id="L649" class="blob-num js-line-number" data-line-number="649"></td>
        <td id="LC649" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L650" class="blob-num js-line-number" data-line-number="650"></td>
        <td id="LC650" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span>///////////////////////////////////////////////////</span></td>
      </tr>
      <tr>
        <td id="L651" class="blob-num js-line-number" data-line-number="651"></td>
        <td id="LC651" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L652" class="blob-num js-line-number" data-line-number="652"></td>
        <td id="LC652" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L653" class="blob-num js-line-number" data-line-number="653"></td>
        <td id="LC653" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@param</span> <span class="pl-smi">on</span> {string} current url</span></td>
      </tr>
      <tr>
        <td id="L654" class="blob-num js-line-number" data-line-number="654"></td>
        <td id="LC654" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@param</span> <span class="pl-smi">route</span> {Object} route regexp to match the url against</span></td>
      </tr>
      <tr>
        <td id="L655" class="blob-num js-line-number" data-line-number="655"></td>
        <td id="LC655" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@return</span> <span class="pl-en">{?Object}</span></span></td>
      </tr>
      <tr>
        <td id="L656" class="blob-num js-line-number" data-line-number="656"></td>
        <td id="LC656" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *</span></td>
      </tr>
      <tr>
        <td id="L657" class="blob-num js-line-number" data-line-number="657"></td>
        <td id="LC657" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@description</span></span></td>
      </tr>
      <tr>
        <td id="L658" class="blob-num js-line-number" data-line-number="658"></td>
        <td id="LC658" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * Check if the route matches the current url.</span></td>
      </tr>
      <tr>
        <td id="L659" class="blob-num js-line-number" data-line-number="659"></td>
        <td id="LC659" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *</span></td>
      </tr>
      <tr>
        <td id="L660" class="blob-num js-line-number" data-line-number="660"></td>
        <td id="LC660" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * Inspired by match in</span></td>
      </tr>
      <tr>
        <td id="L661" class="blob-num js-line-number" data-line-number="661"></td>
        <td id="LC661" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * visionmedia/express/lib/router/router.js.</span></td>
      </tr>
      <tr>
        <td id="L662" class="blob-num js-line-number" data-line-number="662"></td>
        <td id="LC662" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L663" class="blob-num js-line-number" data-line-number="663"></td>
        <td id="LC663" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">switchRouteMatcher</span>(<span class="pl-smi">on</span>, <span class="pl-smi">route</span>) {</td>
      </tr>
      <tr>
        <td id="L664" class="blob-num js-line-number" data-line-number="664"></td>
        <td id="LC664" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> keys <span class="pl-k">=</span> <span class="pl-smi">route</span>.<span class="pl-smi">keys</span>,</td>
      </tr>
      <tr>
        <td id="L665" class="blob-num js-line-number" data-line-number="665"></td>
        <td id="LC665" class="blob-code blob-code-inner js-file-line">          params <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L666" class="blob-num js-line-number" data-line-number="666"></td>
        <td id="LC666" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L667" class="blob-num js-line-number" data-line-number="667"></td>
        <td id="LC667" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">route</span>.<span class="pl-smi">regexp</span>) <span class="pl-k">return</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L668" class="blob-num js-line-number" data-line-number="668"></td>
        <td id="LC668" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L669" class="blob-num js-line-number" data-line-number="669"></td>
        <td id="LC669" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> m <span class="pl-k">=</span> <span class="pl-smi">route</span>.<span class="pl-smi">regexp</span>.<span class="pl-c1">exec</span>(on);</td>
      </tr>
      <tr>
        <td id="L670" class="blob-num js-line-number" data-line-number="670"></td>
        <td id="LC670" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-k">!</span>m) <span class="pl-k">return</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L671" class="blob-num js-line-number" data-line-number="671"></td>
        <td id="LC671" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L672" class="blob-num js-line-number" data-line-number="672"></td>
        <td id="LC672" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">1</span>, len <span class="pl-k">=</span> <span class="pl-smi">m</span>.<span class="pl-c1">length</span>; i <span class="pl-k">&lt;</span> len; <span class="pl-k">++</span>i) {</td>
      </tr>
      <tr>
        <td id="L673" class="blob-num js-line-number" data-line-number="673"></td>
        <td id="LC673" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> key <span class="pl-k">=</span> keys[i <span class="pl-k">-</span> <span class="pl-c1">1</span>];</td>
      </tr>
      <tr>
        <td id="L674" class="blob-num js-line-number" data-line-number="674"></td>
        <td id="LC674" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L675" class="blob-num js-line-number" data-line-number="675"></td>
        <td id="LC675" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> val <span class="pl-k">=</span> m[i];</td>
      </tr>
      <tr>
        <td id="L676" class="blob-num js-line-number" data-line-number="676"></td>
        <td id="LC676" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L677" class="blob-num js-line-number" data-line-number="677"></td>
        <td id="LC677" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (key <span class="pl-k">&amp;&amp;</span> val) {</td>
      </tr>
      <tr>
        <td id="L678" class="blob-num js-line-number" data-line-number="678"></td>
        <td id="LC678" class="blob-code blob-code-inner js-file-line">          params[<span class="pl-smi">key</span>.<span class="pl-c1">name</span>] <span class="pl-k">=</span> val;</td>
      </tr>
      <tr>
        <td id="L679" class="blob-num js-line-number" data-line-number="679"></td>
        <td id="LC679" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L680" class="blob-num js-line-number" data-line-number="680"></td>
        <td id="LC680" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L681" class="blob-num js-line-number" data-line-number="681"></td>
        <td id="LC681" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> params;</td>
      </tr>
      <tr>
        <td id="L682" class="blob-num js-line-number" data-line-number="682"></td>
        <td id="LC682" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L683" class="blob-num js-line-number" data-line-number="683"></td>
        <td id="LC683" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L684" class="blob-num js-line-number" data-line-number="684"></td>
        <td id="LC684" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">prepareRoute</span>(<span class="pl-smi">$locationEvent</span>) {</td>
      </tr>
      <tr>
        <td id="L685" class="blob-num js-line-number" data-line-number="685"></td>
        <td id="LC685" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> lastRoute <span class="pl-k">=</span> <span class="pl-smi">$route</span>.<span class="pl-c1">current</span>;</td>
      </tr>
      <tr>
        <td id="L686" class="blob-num js-line-number" data-line-number="686"></td>
        <td id="LC686" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L687" class="blob-num js-line-number" data-line-number="687"></td>
        <td id="LC687" class="blob-code blob-code-inner js-file-line">      preparedRoute <span class="pl-k">=</span> <span class="pl-en">parseRoute</span>();</td>
      </tr>
      <tr>
        <td id="L688" class="blob-num js-line-number" data-line-number="688"></td>
        <td id="LC688" class="blob-code blob-code-inner js-file-line">      preparedRouteIsUpdateOnly <span class="pl-k">=</span> preparedRoute <span class="pl-k">&amp;&amp;</span> lastRoute <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">preparedRoute</span>.<span class="pl-smi">$$route</span> <span class="pl-k">===</span> <span class="pl-smi">lastRoute</span>.<span class="pl-smi">$$route</span></td>
      </tr>
      <tr>
        <td id="L689" class="blob-num js-line-number" data-line-number="689"></td>
        <td id="LC689" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">angular</span>.<span class="pl-en">equals</span>(<span class="pl-smi">preparedRoute</span>.<span class="pl-smi">pathParams</span>, <span class="pl-smi">lastRoute</span>.<span class="pl-smi">pathParams</span>)</td>
      </tr>
      <tr>
        <td id="L690" class="blob-num js-line-number" data-line-number="690"></td>
        <td id="LC690" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-smi">preparedRoute</span>.<span class="pl-smi">reloadOnSearch</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>forceReload;</td>
      </tr>
      <tr>
        <td id="L691" class="blob-num js-line-number" data-line-number="691"></td>
        <td id="LC691" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L692" class="blob-num js-line-number" data-line-number="692"></td>
        <td id="LC692" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-k">!</span>preparedRouteIsUpdateOnly <span class="pl-k">&amp;&amp;</span> (lastRoute <span class="pl-k">||</span> preparedRoute)) {</td>
      </tr>
      <tr>
        <td id="L693" class="blob-num js-line-number" data-line-number="693"></td>
        <td id="LC693" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-smi">$rootScope</span>.<span class="pl-en">$broadcast</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>$routeChangeStart<span class="pl-pds">&#39;</span></span>, preparedRoute, lastRoute).<span class="pl-smi">defaultPrevented</span>) {</td>
      </tr>
      <tr>
        <td id="L694" class="blob-num js-line-number" data-line-number="694"></td>
        <td id="LC694" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span> ($locationEvent) {</td>
      </tr>
      <tr>
        <td id="L695" class="blob-num js-line-number" data-line-number="695"></td>
        <td id="LC695" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">$locationEvent</span>.<span class="pl-c1">preventDefault</span>();</td>
      </tr>
      <tr>
        <td id="L696" class="blob-num js-line-number" data-line-number="696"></td>
        <td id="LC696" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L697" class="blob-num js-line-number" data-line-number="697"></td>
        <td id="LC697" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L698" class="blob-num js-line-number" data-line-number="698"></td>
        <td id="LC698" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L699" class="blob-num js-line-number" data-line-number="699"></td>
        <td id="LC699" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L700" class="blob-num js-line-number" data-line-number="700"></td>
        <td id="LC700" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L701" class="blob-num js-line-number" data-line-number="701"></td>
        <td id="LC701" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">commitRoute</span>() {</td>
      </tr>
      <tr>
        <td id="L702" class="blob-num js-line-number" data-line-number="702"></td>
        <td id="LC702" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> lastRoute <span class="pl-k">=</span> <span class="pl-smi">$route</span>.<span class="pl-c1">current</span>;</td>
      </tr>
      <tr>
        <td id="L703" class="blob-num js-line-number" data-line-number="703"></td>
        <td id="LC703" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> nextRoute <span class="pl-k">=</span> preparedRoute;</td>
      </tr>
      <tr>
        <td id="L704" class="blob-num js-line-number" data-line-number="704"></td>
        <td id="LC704" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L705" class="blob-num js-line-number" data-line-number="705"></td>
        <td id="LC705" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (preparedRouteIsUpdateOnly) {</td>
      </tr>
      <tr>
        <td id="L706" class="blob-num js-line-number" data-line-number="706"></td>
        <td id="LC706" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">lastRoute</span>.<span class="pl-smi">params</span> <span class="pl-k">=</span> <span class="pl-smi">nextRoute</span>.<span class="pl-smi">params</span>;</td>
      </tr>
      <tr>
        <td id="L707" class="blob-num js-line-number" data-line-number="707"></td>
        <td id="LC707" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">angular</span>.<span class="pl-en">copy</span>(<span class="pl-smi">lastRoute</span>.<span class="pl-smi">params</span>, $routeParams);</td>
      </tr>
      <tr>
        <td id="L708" class="blob-num js-line-number" data-line-number="708"></td>
        <td id="LC708" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">$rootScope</span>.<span class="pl-en">$broadcast</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>$routeUpdate<span class="pl-pds">&#39;</span></span>, lastRoute);</td>
      </tr>
      <tr>
        <td id="L709" class="blob-num js-line-number" data-line-number="709"></td>
        <td id="LC709" class="blob-code blob-code-inner js-file-line">      } <span class="pl-k">else</span> <span class="pl-k">if</span> (nextRoute <span class="pl-k">||</span> lastRoute) {</td>
      </tr>
      <tr>
        <td id="L710" class="blob-num js-line-number" data-line-number="710"></td>
        <td id="LC710" class="blob-code blob-code-inner js-file-line">        forceReload <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L711" class="blob-num js-line-number" data-line-number="711"></td>
        <td id="LC711" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">$route</span>.<span class="pl-c1">current</span> <span class="pl-k">=</span> nextRoute;</td>
      </tr>
      <tr>
        <td id="L712" class="blob-num js-line-number" data-line-number="712"></td>
        <td id="LC712" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L713" class="blob-num js-line-number" data-line-number="713"></td>
        <td id="LC713" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> nextRoutePromise <span class="pl-k">=</span> <span class="pl-smi">$q</span>.<span class="pl-en">resolve</span>(nextRoute);</td>
      </tr>
      <tr>
        <td id="L714" class="blob-num js-line-number" data-line-number="714"></td>
        <td id="LC714" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L715" class="blob-num js-line-number" data-line-number="715"></td>
        <td id="LC715" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">$browser</span>.<span class="pl-en">$$incOutstandingRequestCount</span>();</td>
      </tr>
      <tr>
        <td id="L716" class="blob-num js-line-number" data-line-number="716"></td>
        <td id="LC716" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L717" class="blob-num js-line-number" data-line-number="717"></td>
        <td id="LC717" class="blob-code blob-code-inner js-file-line">        nextRoutePromise.</td>
      </tr>
      <tr>
        <td id="L718" class="blob-num js-line-number" data-line-number="718"></td>
        <td id="LC718" class="blob-code blob-code-inner js-file-line">          <span class="pl-en">then</span>(getRedirectionData).</td>
      </tr>
      <tr>
        <td id="L719" class="blob-num js-line-number" data-line-number="719"></td>
        <td id="LC719" class="blob-code blob-code-inner js-file-line">          <span class="pl-en">then</span>(handlePossibleRedirection).</td>
      </tr>
      <tr>
        <td id="L720" class="blob-num js-line-number" data-line-number="720"></td>
        <td id="LC720" class="blob-code blob-code-inner js-file-line">          <span class="pl-en">then</span>(<span class="pl-k">function</span>(<span class="pl-smi">keepProcessingRoute</span>) {</td>
      </tr>
      <tr>
        <td id="L721" class="blob-num js-line-number" data-line-number="721"></td>
        <td id="LC721" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> keepProcessingRoute <span class="pl-k">&amp;&amp;</span> nextRoutePromise.</td>
      </tr>
      <tr>
        <td id="L722" class="blob-num js-line-number" data-line-number="722"></td>
        <td id="LC722" class="blob-code blob-code-inner js-file-line">              <span class="pl-en">then</span>(resolveLocals).</td>
      </tr>
      <tr>
        <td id="L723" class="blob-num js-line-number" data-line-number="723"></td>
        <td id="LC723" class="blob-code blob-code-inner js-file-line">              <span class="pl-en">then</span>(<span class="pl-k">function</span>(<span class="pl-smi">locals</span>) {</td>
      </tr>
      <tr>
        <td id="L724" class="blob-num js-line-number" data-line-number="724"></td>
        <td id="LC724" class="blob-code blob-code-inner js-file-line">                <span class="pl-c"><span class="pl-c">//</span> after route change</span></td>
      </tr>
      <tr>
        <td id="L725" class="blob-num js-line-number" data-line-number="725"></td>
        <td id="LC725" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (nextRoute <span class="pl-k">===</span> <span class="pl-smi">$route</span>.<span class="pl-c1">current</span>) {</td>
      </tr>
      <tr>
        <td id="L726" class="blob-num js-line-number" data-line-number="726"></td>
        <td id="LC726" class="blob-code blob-code-inner js-file-line">                  <span class="pl-k">if</span> (nextRoute) {</td>
      </tr>
      <tr>
        <td id="L727" class="blob-num js-line-number" data-line-number="727"></td>
        <td id="LC727" class="blob-code blob-code-inner js-file-line">                    <span class="pl-smi">nextRoute</span>.<span class="pl-smi">locals</span> <span class="pl-k">=</span> locals;</td>
      </tr>
      <tr>
        <td id="L728" class="blob-num js-line-number" data-line-number="728"></td>
        <td id="LC728" class="blob-code blob-code-inner js-file-line">                    <span class="pl-smi">angular</span>.<span class="pl-en">copy</span>(<span class="pl-smi">nextRoute</span>.<span class="pl-smi">params</span>, $routeParams);</td>
      </tr>
      <tr>
        <td id="L729" class="blob-num js-line-number" data-line-number="729"></td>
        <td id="LC729" class="blob-code blob-code-inner js-file-line">                  }</td>
      </tr>
      <tr>
        <td id="L730" class="blob-num js-line-number" data-line-number="730"></td>
        <td id="LC730" class="blob-code blob-code-inner js-file-line">                  <span class="pl-smi">$rootScope</span>.<span class="pl-en">$broadcast</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>$routeChangeSuccess<span class="pl-pds">&#39;</span></span>, nextRoute, lastRoute);</td>
      </tr>
      <tr>
        <td id="L731" class="blob-num js-line-number" data-line-number="731"></td>
        <td id="LC731" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L732" class="blob-num js-line-number" data-line-number="732"></td>
        <td id="LC732" class="blob-code blob-code-inner js-file-line">              });</td>
      </tr>
      <tr>
        <td id="L733" class="blob-num js-line-number" data-line-number="733"></td>
        <td id="LC733" class="blob-code blob-code-inner js-file-line">          }).<span class="pl-en">catch</span>(<span class="pl-k">function</span>(<span class="pl-smi">error</span>) {</td>
      </tr>
      <tr>
        <td id="L734" class="blob-num js-line-number" data-line-number="734"></td>
        <td id="LC734" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (nextRoute <span class="pl-k">===</span> <span class="pl-smi">$route</span>.<span class="pl-c1">current</span>) {</td>
      </tr>
      <tr>
        <td id="L735" class="blob-num js-line-number" data-line-number="735"></td>
        <td id="LC735" class="blob-code blob-code-inner js-file-line">              <span class="pl-smi">$rootScope</span>.<span class="pl-en">$broadcast</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>$routeChangeError<span class="pl-pds">&#39;</span></span>, nextRoute, lastRoute, error);</td>
      </tr>
      <tr>
        <td id="L736" class="blob-num js-line-number" data-line-number="736"></td>
        <td id="LC736" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L737" class="blob-num js-line-number" data-line-number="737"></td>
        <td id="LC737" class="blob-code blob-code-inner js-file-line">          }).<span class="pl-en">finally</span>(<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L738" class="blob-num js-line-number" data-line-number="738"></td>
        <td id="LC738" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> Because `commitRoute()` is called from a `$rootScope.$evalAsync` block (see</span></td>
      </tr>
      <tr>
        <td id="L739" class="blob-num js-line-number" data-line-number="739"></td>
        <td id="LC739" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> `$locationWatch`), this `$$completeOutstandingRequest()` call will not cause</span></td>
      </tr>
      <tr>
        <td id="L740" class="blob-num js-line-number" data-line-number="740"></td>
        <td id="LC740" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> `outstandingRequestCount` to hit zero.  This is important in case we are redirecting</span></td>
      </tr>
      <tr>
        <td id="L741" class="blob-num js-line-number" data-line-number="741"></td>
        <td id="LC741" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> to a new route which also requires some asynchronous work.</span></td>
      </tr>
      <tr>
        <td id="L742" class="blob-num js-line-number" data-line-number="742"></td>
        <td id="LC742" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L743" class="blob-num js-line-number" data-line-number="743"></td>
        <td id="LC743" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">$browser</span>.<span class="pl-en">$$completeOutstandingRequest</span>(noop);</td>
      </tr>
      <tr>
        <td id="L744" class="blob-num js-line-number" data-line-number="744"></td>
        <td id="LC744" class="blob-code blob-code-inner js-file-line">          });</td>
      </tr>
      <tr>
        <td id="L745" class="blob-num js-line-number" data-line-number="745"></td>
        <td id="LC745" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L746" class="blob-num js-line-number" data-line-number="746"></td>
        <td id="LC746" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L747" class="blob-num js-line-number" data-line-number="747"></td>
        <td id="LC747" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L748" class="blob-num js-line-number" data-line-number="748"></td>
        <td id="LC748" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">getRedirectionData</span>(<span class="pl-smi">route</span>) {</td>
      </tr>
      <tr>
        <td id="L749" class="blob-num js-line-number" data-line-number="749"></td>
        <td id="LC749" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> data <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L750" class="blob-num js-line-number" data-line-number="750"></td>
        <td id="LC750" class="blob-code blob-code-inner js-file-line">        route<span class="pl-k">:</span> route,</td>
      </tr>
      <tr>
        <td id="L751" class="blob-num js-line-number" data-line-number="751"></td>
        <td id="LC751" class="blob-code blob-code-inner js-file-line">        hasRedirection<span class="pl-k">:</span> <span class="pl-c1">false</span></td>
      </tr>
      <tr>
        <td id="L752" class="blob-num js-line-number" data-line-number="752"></td>
        <td id="LC752" class="blob-code blob-code-inner js-file-line">      };</td>
      </tr>
      <tr>
        <td id="L753" class="blob-num js-line-number" data-line-number="753"></td>
        <td id="LC753" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L754" class="blob-num js-line-number" data-line-number="754"></td>
        <td id="LC754" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (route) {</td>
      </tr>
      <tr>
        <td id="L755" class="blob-num js-line-number" data-line-number="755"></td>
        <td id="LC755" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-smi">route</span>.<span class="pl-smi">redirectTo</span>) {</td>
      </tr>
      <tr>
        <td id="L756" class="blob-num js-line-number" data-line-number="756"></td>
        <td id="LC756" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span> (<span class="pl-smi">angular</span>.<span class="pl-en">isString</span>(<span class="pl-smi">route</span>.<span class="pl-smi">redirectTo</span>)) {</td>
      </tr>
      <tr>
        <td id="L757" class="blob-num js-line-number" data-line-number="757"></td>
        <td id="LC757" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">data</span>.<span class="pl-smi">path</span> <span class="pl-k">=</span> <span class="pl-en">interpolate</span>(<span class="pl-smi">route</span>.<span class="pl-smi">redirectTo</span>, <span class="pl-smi">route</span>.<span class="pl-smi">params</span>);</td>
      </tr>
      <tr>
        <td id="L758" class="blob-num js-line-number" data-line-number="758"></td>
        <td id="LC758" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">data</span>.<span class="pl-smi">search</span> <span class="pl-k">=</span> <span class="pl-smi">route</span>.<span class="pl-smi">params</span>;</td>
      </tr>
      <tr>
        <td id="L759" class="blob-num js-line-number" data-line-number="759"></td>
        <td id="LC759" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">data</span>.<span class="pl-smi">hasRedirection</span> <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L760" class="blob-num js-line-number" data-line-number="760"></td>
        <td id="LC760" class="blob-code blob-code-inner js-file-line">          } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L761" class="blob-num js-line-number" data-line-number="761"></td>
        <td id="LC761" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> oldPath <span class="pl-k">=</span> <span class="pl-smi">$location</span>.<span class="pl-en">path</span>();</td>
      </tr>
      <tr>
        <td id="L762" class="blob-num js-line-number" data-line-number="762"></td>
        <td id="LC762" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> oldSearch <span class="pl-k">=</span> <span class="pl-smi">$location</span>.<span class="pl-c1">search</span>();</td>
      </tr>
      <tr>
        <td id="L763" class="blob-num js-line-number" data-line-number="763"></td>
        <td id="LC763" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> newUrl <span class="pl-k">=</span> <span class="pl-smi">route</span>.<span class="pl-en">redirectTo</span>(<span class="pl-smi">route</span>.<span class="pl-smi">pathParams</span>, oldPath, oldSearch);</td>
      </tr>
      <tr>
        <td id="L764" class="blob-num js-line-number" data-line-number="764"></td>
        <td id="LC764" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L765" class="blob-num js-line-number" data-line-number="765"></td>
        <td id="LC765" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-smi">angular</span>.<span class="pl-en">isDefined</span>(newUrl)) {</td>
      </tr>
      <tr>
        <td id="L766" class="blob-num js-line-number" data-line-number="766"></td>
        <td id="LC766" class="blob-code blob-code-inner js-file-line">              <span class="pl-smi">data</span>.<span class="pl-smi">url</span> <span class="pl-k">=</span> newUrl;</td>
      </tr>
      <tr>
        <td id="L767" class="blob-num js-line-number" data-line-number="767"></td>
        <td id="LC767" class="blob-code blob-code-inner js-file-line">              <span class="pl-smi">data</span>.<span class="pl-smi">hasRedirection</span> <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L768" class="blob-num js-line-number" data-line-number="768"></td>
        <td id="LC768" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L769" class="blob-num js-line-number" data-line-number="769"></td>
        <td id="LC769" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L770" class="blob-num js-line-number" data-line-number="770"></td>
        <td id="LC770" class="blob-code blob-code-inner js-file-line">        } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-smi">route</span>.<span class="pl-smi">resolveRedirectTo</span>) {</td>
      </tr>
      <tr>
        <td id="L771" class="blob-num js-line-number" data-line-number="771"></td>
        <td id="LC771" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">return</span> $q.</td>
      </tr>
      <tr>
        <td id="L772" class="blob-num js-line-number" data-line-number="772"></td>
        <td id="LC772" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">resolve</span>(<span class="pl-smi">$injector</span>.<span class="pl-en">invoke</span>(<span class="pl-smi">route</span>.<span class="pl-smi">resolveRedirectTo</span>)).</td>
      </tr>
      <tr>
        <td id="L773" class="blob-num js-line-number" data-line-number="773"></td>
        <td id="LC773" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">then</span>(<span class="pl-k">function</span>(<span class="pl-smi">newUrl</span>) {</td>
      </tr>
      <tr>
        <td id="L774" class="blob-num js-line-number" data-line-number="774"></td>
        <td id="LC774" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">if</span> (<span class="pl-smi">angular</span>.<span class="pl-en">isDefined</span>(newUrl)) {</td>
      </tr>
      <tr>
        <td id="L775" class="blob-num js-line-number" data-line-number="775"></td>
        <td id="LC775" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">data</span>.<span class="pl-smi">url</span> <span class="pl-k">=</span> newUrl;</td>
      </tr>
      <tr>
        <td id="L776" class="blob-num js-line-number" data-line-number="776"></td>
        <td id="LC776" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">data</span>.<span class="pl-smi">hasRedirection</span> <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L777" class="blob-num js-line-number" data-line-number="777"></td>
        <td id="LC777" class="blob-code blob-code-inner js-file-line">              }</td>
      </tr>
      <tr>
        <td id="L778" class="blob-num js-line-number" data-line-number="778"></td>
        <td id="LC778" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L779" class="blob-num js-line-number" data-line-number="779"></td>
        <td id="LC779" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">return</span> data;</td>
      </tr>
      <tr>
        <td id="L780" class="blob-num js-line-number" data-line-number="780"></td>
        <td id="LC780" class="blob-code blob-code-inner js-file-line">            });</td>
      </tr>
      <tr>
        <td id="L781" class="blob-num js-line-number" data-line-number="781"></td>
        <td id="LC781" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L782" class="blob-num js-line-number" data-line-number="782"></td>
        <td id="LC782" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L783" class="blob-num js-line-number" data-line-number="783"></td>
        <td id="LC783" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L784" class="blob-num js-line-number" data-line-number="784"></td>
        <td id="LC784" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> data;</td>
      </tr>
      <tr>
        <td id="L785" class="blob-num js-line-number" data-line-number="785"></td>
        <td id="LC785" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L786" class="blob-num js-line-number" data-line-number="786"></td>
        <td id="LC786" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L787" class="blob-num js-line-number" data-line-number="787"></td>
        <td id="LC787" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">handlePossibleRedirection</span>(<span class="pl-smi">data</span>) {</td>
      </tr>
      <tr>
        <td id="L788" class="blob-num js-line-number" data-line-number="788"></td>
        <td id="LC788" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> keepProcessingRoute <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L789" class="blob-num js-line-number" data-line-number="789"></td>
        <td id="LC789" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L790" class="blob-num js-line-number" data-line-number="790"></td>
        <td id="LC790" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-smi">data</span>.<span class="pl-smi">route</span> <span class="pl-k">!==</span> <span class="pl-smi">$route</span>.<span class="pl-c1">current</span>) {</td>
      </tr>
      <tr>
        <td id="L791" class="blob-num js-line-number" data-line-number="791"></td>
        <td id="LC791" class="blob-code blob-code-inner js-file-line">        keepProcessingRoute <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L792" class="blob-num js-line-number" data-line-number="792"></td>
        <td id="LC792" class="blob-code blob-code-inner js-file-line">      } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-smi">data</span>.<span class="pl-smi">hasRedirection</span>) {</td>
      </tr>
      <tr>
        <td id="L793" class="blob-num js-line-number" data-line-number="793"></td>
        <td id="LC793" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> oldUrl <span class="pl-k">=</span> <span class="pl-smi">$location</span>.<span class="pl-en">url</span>();</td>
      </tr>
      <tr>
        <td id="L794" class="blob-num js-line-number" data-line-number="794"></td>
        <td id="LC794" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> newUrl <span class="pl-k">=</span> <span class="pl-smi">data</span>.<span class="pl-smi">url</span>;</td>
      </tr>
      <tr>
        <td id="L795" class="blob-num js-line-number" data-line-number="795"></td>
        <td id="LC795" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L796" class="blob-num js-line-number" data-line-number="796"></td>
        <td id="LC796" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (newUrl) {</td>
      </tr>
      <tr>
        <td id="L797" class="blob-num js-line-number" data-line-number="797"></td>
        <td id="LC797" class="blob-code blob-code-inner js-file-line">          $location.</td>
      </tr>
      <tr>
        <td id="L798" class="blob-num js-line-number" data-line-number="798"></td>
        <td id="LC798" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">url</span>(newUrl).</td>
      </tr>
      <tr>
        <td id="L799" class="blob-num js-line-number" data-line-number="799"></td>
        <td id="LC799" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">replace</span>();</td>
      </tr>
      <tr>
        <td id="L800" class="blob-num js-line-number" data-line-number="800"></td>
        <td id="LC800" class="blob-code blob-code-inner js-file-line">        } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L801" class="blob-num js-line-number" data-line-number="801"></td>
        <td id="LC801" class="blob-code blob-code-inner js-file-line">          newUrl <span class="pl-k">=</span> $location.</td>
      </tr>
      <tr>
        <td id="L802" class="blob-num js-line-number" data-line-number="802"></td>
        <td id="LC802" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">path</span>(<span class="pl-smi">data</span>.<span class="pl-smi">path</span>).</td>
      </tr>
      <tr>
        <td id="L803" class="blob-num js-line-number" data-line-number="803"></td>
        <td id="LC803" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">search</span>(<span class="pl-smi">data</span>.<span class="pl-smi">search</span>).</td>
      </tr>
      <tr>
        <td id="L804" class="blob-num js-line-number" data-line-number="804"></td>
        <td id="LC804" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">replace</span>().</td>
      </tr>
      <tr>
        <td id="L805" class="blob-num js-line-number" data-line-number="805"></td>
        <td id="LC805" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">url</span>();</td>
      </tr>
      <tr>
        <td id="L806" class="blob-num js-line-number" data-line-number="806"></td>
        <td id="LC806" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L807" class="blob-num js-line-number" data-line-number="807"></td>
        <td id="LC807" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L808" class="blob-num js-line-number" data-line-number="808"></td>
        <td id="LC808" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (newUrl <span class="pl-k">!==</span> oldUrl) {</td>
      </tr>
      <tr>
        <td id="L809" class="blob-num js-line-number" data-line-number="809"></td>
        <td id="LC809" class="blob-code blob-code-inner js-file-line">          <span class="pl-c"><span class="pl-c">//</span> Exit out and don&#39;t process current next value,</span></td>
      </tr>
      <tr>
        <td id="L810" class="blob-num js-line-number" data-line-number="810"></td>
        <td id="LC810" class="blob-code blob-code-inner js-file-line">          <span class="pl-c"><span class="pl-c">//</span> wait for next location change from redirect</span></td>
      </tr>
      <tr>
        <td id="L811" class="blob-num js-line-number" data-line-number="811"></td>
        <td id="LC811" class="blob-code blob-code-inner js-file-line">          keepProcessingRoute <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L812" class="blob-num js-line-number" data-line-number="812"></td>
        <td id="LC812" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L813" class="blob-num js-line-number" data-line-number="813"></td>
        <td id="LC813" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L814" class="blob-num js-line-number" data-line-number="814"></td>
        <td id="LC814" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L815" class="blob-num js-line-number" data-line-number="815"></td>
        <td id="LC815" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> keepProcessingRoute;</td>
      </tr>
      <tr>
        <td id="L816" class="blob-num js-line-number" data-line-number="816"></td>
        <td id="LC816" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L817" class="blob-num js-line-number" data-line-number="817"></td>
        <td id="LC817" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L818" class="blob-num js-line-number" data-line-number="818"></td>
        <td id="LC818" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">resolveLocals</span>(<span class="pl-smi">route</span>) {</td>
      </tr>
      <tr>
        <td id="L819" class="blob-num js-line-number" data-line-number="819"></td>
        <td id="LC819" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (route) {</td>
      </tr>
      <tr>
        <td id="L820" class="blob-num js-line-number" data-line-number="820"></td>
        <td id="LC820" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> locals <span class="pl-k">=</span> <span class="pl-smi">angular</span>.<span class="pl-en">extend</span>({}, <span class="pl-smi">route</span>.<span class="pl-smi">resolve</span>);</td>
      </tr>
      <tr>
        <td id="L821" class="blob-num js-line-number" data-line-number="821"></td>
        <td id="LC821" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">angular</span>.<span class="pl-c1">forEach</span>(locals, <span class="pl-k">function</span>(<span class="pl-smi">value</span>, <span class="pl-smi">key</span>) {</td>
      </tr>
      <tr>
        <td id="L822" class="blob-num js-line-number" data-line-number="822"></td>
        <td id="LC822" class="blob-code blob-code-inner js-file-line">          locals[key] <span class="pl-k">=</span> <span class="pl-smi">angular</span>.<span class="pl-en">isString</span>(value) <span class="pl-k">?</span></td>
      </tr>
      <tr>
        <td id="L823" class="blob-num js-line-number" data-line-number="823"></td>
        <td id="LC823" class="blob-code blob-code-inner js-file-line">              <span class="pl-smi">$injector</span>.<span class="pl-c1">get</span>(value) <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L824" class="blob-num js-line-number" data-line-number="824"></td>
        <td id="LC824" class="blob-code blob-code-inner js-file-line">              <span class="pl-smi">$injector</span>.<span class="pl-en">invoke</span>(value, <span class="pl-c1">null</span>, <span class="pl-c1">null</span>, key);</td>
      </tr>
      <tr>
        <td id="L825" class="blob-num js-line-number" data-line-number="825"></td>
        <td id="LC825" class="blob-code blob-code-inner js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L826" class="blob-num js-line-number" data-line-number="826"></td>
        <td id="LC826" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> template <span class="pl-k">=</span> <span class="pl-en">getTemplateFor</span>(route);</td>
      </tr>
      <tr>
        <td id="L827" class="blob-num js-line-number" data-line-number="827"></td>
        <td id="LC827" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-smi">angular</span>.<span class="pl-en">isDefined</span>(template)) {</td>
      </tr>
      <tr>
        <td id="L828" class="blob-num js-line-number" data-line-number="828"></td>
        <td id="LC828" class="blob-code blob-code-inner js-file-line">          locals[<span class="pl-s"><span class="pl-pds">&#39;</span>$template<span class="pl-pds">&#39;</span></span>] <span class="pl-k">=</span> template;</td>
      </tr>
      <tr>
        <td id="L829" class="blob-num js-line-number" data-line-number="829"></td>
        <td id="LC829" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L830" class="blob-num js-line-number" data-line-number="830"></td>
        <td id="LC830" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-smi">$q</span>.<span class="pl-c1">all</span>(locals);</td>
      </tr>
      <tr>
        <td id="L831" class="blob-num js-line-number" data-line-number="831"></td>
        <td id="LC831" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L832" class="blob-num js-line-number" data-line-number="832"></td>
        <td id="LC832" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L833" class="blob-num js-line-number" data-line-number="833"></td>
        <td id="LC833" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L834" class="blob-num js-line-number" data-line-number="834"></td>
        <td id="LC834" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">getTemplateFor</span>(<span class="pl-smi">route</span>) {</td>
      </tr>
      <tr>
        <td id="L835" class="blob-num js-line-number" data-line-number="835"></td>
        <td id="LC835" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> template, templateUrl;</td>
      </tr>
      <tr>
        <td id="L836" class="blob-num js-line-number" data-line-number="836"></td>
        <td id="LC836" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-smi">angular</span>.<span class="pl-en">isDefined</span>(template <span class="pl-k">=</span> <span class="pl-smi">route</span>.<span class="pl-smi">template</span>)) {</td>
      </tr>
      <tr>
        <td id="L837" class="blob-num js-line-number" data-line-number="837"></td>
        <td id="LC837" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-smi">angular</span>.<span class="pl-en">isFunction</span>(template)) {</td>
      </tr>
      <tr>
        <td id="L838" class="blob-num js-line-number" data-line-number="838"></td>
        <td id="LC838" class="blob-code blob-code-inner js-file-line">          template <span class="pl-k">=</span> <span class="pl-en">template</span>(<span class="pl-smi">route</span>.<span class="pl-smi">params</span>);</td>
      </tr>
      <tr>
        <td id="L839" class="blob-num js-line-number" data-line-number="839"></td>
        <td id="LC839" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L840" class="blob-num js-line-number" data-line-number="840"></td>
        <td id="LC840" class="blob-code blob-code-inner js-file-line">      } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-smi">angular</span>.<span class="pl-en">isDefined</span>(templateUrl <span class="pl-k">=</span> <span class="pl-smi">route</span>.<span class="pl-smi">templateUrl</span>)) {</td>
      </tr>
      <tr>
        <td id="L841" class="blob-num js-line-number" data-line-number="841"></td>
        <td id="LC841" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-smi">angular</span>.<span class="pl-en">isFunction</span>(templateUrl)) {</td>
      </tr>
      <tr>
        <td id="L842" class="blob-num js-line-number" data-line-number="842"></td>
        <td id="LC842" class="blob-code blob-code-inner js-file-line">          templateUrl <span class="pl-k">=</span> <span class="pl-en">templateUrl</span>(<span class="pl-smi">route</span>.<span class="pl-smi">params</span>);</td>
      </tr>
      <tr>
        <td id="L843" class="blob-num js-line-number" data-line-number="843"></td>
        <td id="LC843" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L844" class="blob-num js-line-number" data-line-number="844"></td>
        <td id="LC844" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-smi">angular</span>.<span class="pl-en">isDefined</span>(templateUrl)) {</td>
      </tr>
      <tr>
        <td id="L845" class="blob-num js-line-number" data-line-number="845"></td>
        <td id="LC845" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">route</span>.<span class="pl-smi">loadedTemplateUrl</span> <span class="pl-k">=</span> <span class="pl-smi">$sce</span>.<span class="pl-c1">valueOf</span>(templateUrl);</td>
      </tr>
      <tr>
        <td id="L846" class="blob-num js-line-number" data-line-number="846"></td>
        <td id="LC846" class="blob-code blob-code-inner js-file-line">          template <span class="pl-k">=</span> <span class="pl-en">$templateRequest</span>(templateUrl);</td>
      </tr>
      <tr>
        <td id="L847" class="blob-num js-line-number" data-line-number="847"></td>
        <td id="LC847" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L848" class="blob-num js-line-number" data-line-number="848"></td>
        <td id="LC848" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L849" class="blob-num js-line-number" data-line-number="849"></td>
        <td id="LC849" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> template;</td>
      </tr>
      <tr>
        <td id="L850" class="blob-num js-line-number" data-line-number="850"></td>
        <td id="LC850" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L851" class="blob-num js-line-number" data-line-number="851"></td>
        <td id="LC851" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L852" class="blob-num js-line-number" data-line-number="852"></td>
        <td id="LC852" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L853" class="blob-num js-line-number" data-line-number="853"></td>
        <td id="LC853" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@returns</span> <span class="pl-en">{Object}</span> the current active route, by matching it against the URL</span></td>
      </tr>
      <tr>
        <td id="L854" class="blob-num js-line-number" data-line-number="854"></td>
        <td id="LC854" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L855" class="blob-num js-line-number" data-line-number="855"></td>
        <td id="LC855" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">parseRoute</span>() {</td>
      </tr>
      <tr>
        <td id="L856" class="blob-num js-line-number" data-line-number="856"></td>
        <td id="LC856" class="blob-code blob-code-inner js-file-line">      <span class="pl-c"><span class="pl-c">//</span> Match a route</span></td>
      </tr>
      <tr>
        <td id="L857" class="blob-num js-line-number" data-line-number="857"></td>
        <td id="LC857" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> params, match;</td>
      </tr>
      <tr>
        <td id="L858" class="blob-num js-line-number" data-line-number="858"></td>
        <td id="LC858" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">angular</span>.<span class="pl-c1">forEach</span>(routes, <span class="pl-k">function</span>(<span class="pl-smi">route</span>, <span class="pl-smi">path</span>) {</td>
      </tr>
      <tr>
        <td id="L859" class="blob-num js-line-number" data-line-number="859"></td>
        <td id="LC859" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">!</span>match <span class="pl-k">&amp;&amp;</span> (params <span class="pl-k">=</span> <span class="pl-en">switchRouteMatcher</span>(<span class="pl-smi">$location</span>.<span class="pl-en">path</span>(), route))) {</td>
      </tr>
      <tr>
        <td id="L860" class="blob-num js-line-number" data-line-number="860"></td>
        <td id="LC860" class="blob-code blob-code-inner js-file-line">          match <span class="pl-k">=</span> <span class="pl-en">inherit</span>(route, {</td>
      </tr>
      <tr>
        <td id="L861" class="blob-num js-line-number" data-line-number="861"></td>
        <td id="LC861" class="blob-code blob-code-inner js-file-line">            params<span class="pl-k">:</span> <span class="pl-smi">angular</span>.<span class="pl-en">extend</span>({}, <span class="pl-smi">$location</span>.<span class="pl-c1">search</span>(), params),</td>
      </tr>
      <tr>
        <td id="L862" class="blob-num js-line-number" data-line-number="862"></td>
        <td id="LC862" class="blob-code blob-code-inner js-file-line">            pathParams<span class="pl-k">:</span> params});</td>
      </tr>
      <tr>
        <td id="L863" class="blob-num js-line-number" data-line-number="863"></td>
        <td id="LC863" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">match</span>.<span class="pl-smi">$$route</span> <span class="pl-k">=</span> route;</td>
      </tr>
      <tr>
        <td id="L864" class="blob-num js-line-number" data-line-number="864"></td>
        <td id="LC864" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L865" class="blob-num js-line-number" data-line-number="865"></td>
        <td id="LC865" class="blob-code blob-code-inner js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L866" class="blob-num js-line-number" data-line-number="866"></td>
        <td id="LC866" class="blob-code blob-code-inner js-file-line">      <span class="pl-c"><span class="pl-c">//</span> No route matched; fallback to &quot;otherwise&quot; route</span></td>
      </tr>
      <tr>
        <td id="L867" class="blob-num js-line-number" data-line-number="867"></td>
        <td id="LC867" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> match <span class="pl-k">||</span> routes[<span class="pl-c1">null</span>] <span class="pl-k">&amp;&amp;</span> <span class="pl-en">inherit</span>(routes[<span class="pl-c1">null</span>], {params<span class="pl-k">:</span> {}, pathParams<span class="pl-k">:</span>{}});</td>
      </tr>
      <tr>
        <td id="L868" class="blob-num js-line-number" data-line-number="868"></td>
        <td id="LC868" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L869" class="blob-num js-line-number" data-line-number="869"></td>
        <td id="LC869" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L870" class="blob-num js-line-number" data-line-number="870"></td>
        <td id="LC870" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L871" class="blob-num js-line-number" data-line-number="871"></td>
        <td id="LC871" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@returns</span> <span class="pl-en">{string}</span> interpolation of the redirect path with the parameters</span></td>
      </tr>
      <tr>
        <td id="L872" class="blob-num js-line-number" data-line-number="872"></td>
        <td id="LC872" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L873" class="blob-num js-line-number" data-line-number="873"></td>
        <td id="LC873" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">interpolate</span>(<span class="pl-smi">string</span>, <span class="pl-smi">params</span>) {</td>
      </tr>
      <tr>
        <td id="L874" class="blob-num js-line-number" data-line-number="874"></td>
        <td id="LC874" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> result <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L875" class="blob-num js-line-number" data-line-number="875"></td>
        <td id="LC875" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">angular</span>.<span class="pl-c1">forEach</span>((string <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>).<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>:<span class="pl-pds">&#39;</span></span>), <span class="pl-k">function</span>(<span class="pl-smi">segment</span>, <span class="pl-smi">i</span>) {</td>
      </tr>
      <tr>
        <td id="L876" class="blob-num js-line-number" data-line-number="876"></td>
        <td id="LC876" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (i <span class="pl-k">===</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L877" class="blob-num js-line-number" data-line-number="877"></td>
        <td id="LC877" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">result</span>.<span class="pl-c1">push</span>(segment);</td>
      </tr>
      <tr>
        <td id="L878" class="blob-num js-line-number" data-line-number="878"></td>
        <td id="LC878" class="blob-code blob-code-inner js-file-line">        } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L879" class="blob-num js-line-number" data-line-number="879"></td>
        <td id="LC879" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> segmentMatch <span class="pl-k">=</span> <span class="pl-smi">segment</span>.<span class="pl-c1">match</span>(<span class="pl-sr"><span class="pl-pds">/</span>(<span class="pl-c1">\w</span><span class="pl-k">+</span>)(?:<span class="pl-c1">[?*]</span>)<span class="pl-k">?</span>(<span class="pl-c1">.</span><span class="pl-k">*</span>)<span class="pl-pds">/</span></span>);</td>
      </tr>
      <tr>
        <td id="L880" class="blob-num js-line-number" data-line-number="880"></td>
        <td id="LC880" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> key <span class="pl-k">=</span> segmentMatch[<span class="pl-c1">1</span>];</td>
      </tr>
      <tr>
        <td id="L881" class="blob-num js-line-number" data-line-number="881"></td>
        <td id="LC881" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">result</span>.<span class="pl-c1">push</span>(params[key]);</td>
      </tr>
      <tr>
        <td id="L882" class="blob-num js-line-number" data-line-number="882"></td>
        <td id="LC882" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">result</span>.<span class="pl-c1">push</span>(segmentMatch[<span class="pl-c1">2</span>] <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L883" class="blob-num js-line-number" data-line-number="883"></td>
        <td id="LC883" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">delete</span> params[key];</td>
      </tr>
      <tr>
        <td id="L884" class="blob-num js-line-number" data-line-number="884"></td>
        <td id="LC884" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L885" class="blob-num js-line-number" data-line-number="885"></td>
        <td id="LC885" class="blob-code blob-code-inner js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L886" class="blob-num js-line-number" data-line-number="886"></td>
        <td id="LC886" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-smi">result</span>.<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L887" class="blob-num js-line-number" data-line-number="887"></td>
        <td id="LC887" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L888" class="blob-num js-line-number" data-line-number="888"></td>
        <td id="LC888" class="blob-code blob-code-inner js-file-line">  }];</td>
      </tr>
      <tr>
        <td id="L889" class="blob-num js-line-number" data-line-number="889"></td>
        <td id="LC889" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L890" class="blob-num js-line-number" data-line-number="890"></td>
        <td id="LC890" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L891" class="blob-num js-line-number" data-line-number="891"></td>
        <td id="LC891" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">instantiateRoute</span>.<span class="pl-smi">$inject</span> <span class="pl-k">=</span> [<span class="pl-s"><span class="pl-pds">&#39;</span>$injector<span class="pl-pds">&#39;</span></span>];</td>
      </tr>
      <tr>
        <td id="L892" class="blob-num js-line-number" data-line-number="892"></td>
        <td id="LC892" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">instantiateRoute</span>(<span class="pl-smi">$injector</span>) {</td>
      </tr>
      <tr>
        <td id="L893" class="blob-num js-line-number" data-line-number="893"></td>
        <td id="LC893" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (isEagerInstantiationEnabled) {</td>
      </tr>
      <tr>
        <td id="L894" class="blob-num js-line-number" data-line-number="894"></td>
        <td id="LC894" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> Instantiate `$route`</span></td>
      </tr>
      <tr>
        <td id="L895" class="blob-num js-line-number" data-line-number="895"></td>
        <td id="LC895" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">$injector</span>.<span class="pl-c1">get</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>$route<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L896" class="blob-num js-line-number" data-line-number="896"></td>
        <td id="LC896" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L897" class="blob-num js-line-number" data-line-number="897"></td>
        <td id="LC897" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L898" class="blob-num js-line-number" data-line-number="898"></td>
        <td id="LC898" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L899" class="blob-num js-line-number" data-line-number="899"></td>
        <td id="LC899" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">ngRouteModule</span>.<span class="pl-en">provider</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>$routeParams<span class="pl-pds">&#39;</span></span>, $RouteParamsProvider);</td>
      </tr>
      <tr>
        <td id="L900" class="blob-num js-line-number" data-line-number="900"></td>
        <td id="LC900" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L901" class="blob-num js-line-number" data-line-number="901"></td>
        <td id="LC901" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L902" class="blob-num js-line-number" data-line-number="902"></td>
        <td id="LC902" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L903" class="blob-num js-line-number" data-line-number="903"></td>
        <td id="LC903" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * @ngdoc service</span></td>
      </tr>
      <tr>
        <td id="L904" class="blob-num js-line-number" data-line-number="904"></td>
        <td id="LC904" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-k">@name</span> <span class="pl-en">$routeParams</span></span></td>
      </tr>
      <tr>
        <td id="L905" class="blob-num js-line-number" data-line-number="905"></td>
        <td id="LC905" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-k">@requires</span> <span class="pl-en">$route</span></span></td>
      </tr>
      <tr>
        <td id="L906" class="blob-num js-line-number" data-line-number="906"></td>
        <td id="LC906" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-k">@this</span></span></td>
      </tr>
      <tr>
        <td id="L907" class="blob-num js-line-number" data-line-number="907"></td>
        <td id="LC907" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L908" class="blob-num js-line-number" data-line-number="908"></td>
        <td id="LC908" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-k">@description</span></span></td>
      </tr>
      <tr>
        <td id="L909" class="blob-num js-line-number" data-line-number="909"></td>
        <td id="LC909" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * The `$routeParams` service allows you to retrieve the current set of route parameters.</span></td>
      </tr>
      <tr>
        <td id="L910" class="blob-num js-line-number" data-line-number="910"></td>
        <td id="LC910" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L911" class="blob-num js-line-number" data-line-number="911"></td>
        <td id="LC911" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Requires the <span class="pl-en">{<span class="pl-k">@link</span> <span class="pl-smi">ngRoute</span> `ngRoute`}</span> module to be installed.</span></td>
      </tr>
      <tr>
        <td id="L912" class="blob-num js-line-number" data-line-number="912"></td>
        <td id="LC912" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L913" class="blob-num js-line-number" data-line-number="913"></td>
        <td id="LC913" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * The route parameters are a combination of <span class="pl-en">{<span class="pl-k">@link</span> <span class="pl-smi">ng.$location</span> `$location`}</span>&#39;s</span></td>
      </tr>
      <tr>
        <td id="L914" class="blob-num js-line-number" data-line-number="914"></td>
        <td id="LC914" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-en">{<span class="pl-k">@link</span> <span class="pl-smi">ng.$location#search</span> `search()`}</span> and <span class="pl-en">{<span class="pl-k">@link</span> <span class="pl-smi">ng.$location#path</span> `path()`}</span>.</span></td>
      </tr>
      <tr>
        <td id="L915" class="blob-num js-line-number" data-line-number="915"></td>
        <td id="LC915" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * The `path` parameters are extracted when the <span class="pl-en">{<span class="pl-k">@link</span> <span class="pl-smi">ngRoute.$route</span> `$route`}</span> path is matched.</span></td>
      </tr>
      <tr>
        <td id="L916" class="blob-num js-line-number" data-line-number="916"></td>
        <td id="LC916" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L917" class="blob-num js-line-number" data-line-number="917"></td>
        <td id="LC917" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * In case of parameter name collision, `path` params take precedence over `search` params.</span></td>
      </tr>
      <tr>
        <td id="L918" class="blob-num js-line-number" data-line-number="918"></td>
        <td id="LC918" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L919" class="blob-num js-line-number" data-line-number="919"></td>
        <td id="LC919" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * The service guarantees that the identity of the `$routeParams` object will remain unchanged</span></td>
      </tr>
      <tr>
        <td id="L920" class="blob-num js-line-number" data-line-number="920"></td>
        <td id="LC920" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * (but its properties will likely change) even when a route change occurs.</span></td>
      </tr>
      <tr>
        <td id="L921" class="blob-num js-line-number" data-line-number="921"></td>
        <td id="LC921" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L922" class="blob-num js-line-number" data-line-number="922"></td>
        <td id="LC922" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Note that the `$routeParams` are only updated *after* a route change completes successfully.</span></td>
      </tr>
      <tr>
        <td id="L923" class="blob-num js-line-number" data-line-number="923"></td>
        <td id="LC923" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * This means that you cannot rely on `$routeParams` being correct in route resolve functions.</span></td>
      </tr>
      <tr>
        <td id="L924" class="blob-num js-line-number" data-line-number="924"></td>
        <td id="LC924" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Instead you can use `$route.current.params` to access the new route&#39;s parameters.</span></td>
      </tr>
      <tr>
        <td id="L925" class="blob-num js-line-number" data-line-number="925"></td>
        <td id="LC925" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L926" class="blob-num js-line-number" data-line-number="926"></td>
        <td id="LC926" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-k">@example</span></span></td>
      </tr>
      <tr>
        <td id="L927" class="blob-num js-line-number" data-line-number="927"></td>
        <td id="LC927" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-s1"><span class="pl-s"><span class="pl-pds">`</span><span class="pl-pds">`</span><span class="pl-pds">`</span>js</span></span></span></td>
      </tr>
      <tr>
        <td id="L928" class="blob-num js-line-number" data-line-number="928"></td>
        <td id="LC928" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *  <span class="pl-s1"><span class="pl-c"><span class="pl-c">//</span> Given:</span></span></span></td>
      </tr>
      <tr>
        <td id="L929" class="blob-num js-line-number" data-line-number="929"></td>
        <td id="LC929" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *  <span class="pl-s1"><span class="pl-c"><span class="pl-c">//</span> URL: http://server.com/index.html#/Chapter/1/Section/2?search=moby</span></span></span></td>
      </tr>
      <tr>
        <td id="L930" class="blob-num js-line-number" data-line-number="930"></td>
        <td id="LC930" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *  <span class="pl-s1"><span class="pl-c"><span class="pl-c">//</span> Route: /Chapter/:chapterId/Section/:sectionId</span></span></span></td>
      </tr>
      <tr>
        <td id="L931" class="blob-num js-line-number" data-line-number="931"></td>
        <td id="LC931" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *  <span class="pl-s1"><span class="pl-c"><span class="pl-c">//</span></span></span></span></td>
      </tr>
      <tr>
        <td id="L932" class="blob-num js-line-number" data-line-number="932"></td>
        <td id="LC932" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *  <span class="pl-s1"><span class="pl-c"><span class="pl-c">//</span> Then</span></span></span></td>
      </tr>
      <tr>
        <td id="L933" class="blob-num js-line-number" data-line-number="933"></td>
        <td id="LC933" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *  <span class="pl-s1">$routeParams <span class="pl-k">==&gt;</span> {chapterId<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>1<span class="pl-pds">&#39;</span></span>, sectionId<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>2<span class="pl-pds">&#39;</span></span>, search<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>moby<span class="pl-pds">&#39;</span></span>}</span></span></td>
      </tr>
      <tr>
        <td id="L934" class="blob-num js-line-number" data-line-number="934"></td>
        <td id="LC934" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-s1"><span class="pl-s"><span class="pl-pds">`</span><span class="pl-pds">`</span><span class="pl-pds">`</span></span></span></span></td>
      </tr>
      <tr>
        <td id="L935" class="blob-num js-line-number" data-line-number="935"></td>
        <td id="LC935" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L936" class="blob-num js-line-number" data-line-number="936"></td>
        <td id="LC936" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">$RouteParamsProvider</span>() {</td>
      </tr>
      <tr>
        <td id="L937" class="blob-num js-line-number" data-line-number="937"></td>
        <td id="LC937" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-en">$get</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() { <span class="pl-k">return</span> {}; };</td>
      </tr>
      <tr>
        <td id="L938" class="blob-num js-line-number" data-line-number="938"></td>
        <td id="LC938" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L939" class="blob-num js-line-number" data-line-number="939"></td>
        <td id="LC939" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L940" class="blob-num js-line-number" data-line-number="940"></td>
        <td id="LC940" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">ngRouteModule</span>.<span class="pl-en">directive</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>ngView<span class="pl-pds">&#39;</span></span>, ngViewFactory);</td>
      </tr>
      <tr>
        <td id="L941" class="blob-num js-line-number" data-line-number="941"></td>
        <td id="LC941" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">ngRouteModule</span>.<span class="pl-en">directive</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>ngView<span class="pl-pds">&#39;</span></span>, ngViewFillContentFactory);</td>
      </tr>
      <tr>
        <td id="L942" class="blob-num js-line-number" data-line-number="942"></td>
        <td id="LC942" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L943" class="blob-num js-line-number" data-line-number="943"></td>
        <td id="LC943" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L944" class="blob-num js-line-number" data-line-number="944"></td>
        <td id="LC944" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L945" class="blob-num js-line-number" data-line-number="945"></td>
        <td id="LC945" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * @ngdoc directive</span></td>
      </tr>
      <tr>
        <td id="L946" class="blob-num js-line-number" data-line-number="946"></td>
        <td id="LC946" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-k">@name</span> <span class="pl-en">ngView</span></span></td>
      </tr>
      <tr>
        <td id="L947" class="blob-num js-line-number" data-line-number="947"></td>
        <td id="LC947" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * @restrict ECA</span></td>
      </tr>
      <tr>
        <td id="L948" class="blob-num js-line-number" data-line-number="948"></td>
        <td id="LC948" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L949" class="blob-num js-line-number" data-line-number="949"></td>
        <td id="LC949" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-k">@description</span></span></td>
      </tr>
      <tr>
        <td id="L950" class="blob-num js-line-number" data-line-number="950"></td>
        <td id="LC950" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * `ngView` is a directive that complements the <span class="pl-en">{<span class="pl-k">@link</span> <span class="pl-smi">ngRoute.$route</span> $route}</span> service by</span></td>
      </tr>
      <tr>
        <td id="L951" class="blob-num js-line-number" data-line-number="951"></td>
        <td id="LC951" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * including the rendered template of the current route into the main layout (`index.html`) file.</span></td>
      </tr>
      <tr>
        <td id="L952" class="blob-num js-line-number" data-line-number="952"></td>
        <td id="LC952" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Every time the current route changes, the included view changes with it according to the</span></td>
      </tr>
      <tr>
        <td id="L953" class="blob-num js-line-number" data-line-number="953"></td>
        <td id="LC953" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * configuration of the `$route` service.</span></td>
      </tr>
      <tr>
        <td id="L954" class="blob-num js-line-number" data-line-number="954"></td>
        <td id="LC954" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L955" class="blob-num js-line-number" data-line-number="955"></td>
        <td id="LC955" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Requires the <span class="pl-en">{<span class="pl-k">@link</span> <span class="pl-smi">ngRoute</span> `ngRoute`}</span> module to be installed.</span></td>
      </tr>
      <tr>
        <td id="L956" class="blob-num js-line-number" data-line-number="956"></td>
        <td id="LC956" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L957" class="blob-num js-line-number" data-line-number="957"></td>
        <td id="LC957" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * @animations</span></td>
      </tr>
      <tr>
        <td id="L958" class="blob-num js-line-number" data-line-number="958"></td>
        <td id="LC958" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * | Animation                        | Occurs                              |</span></td>
      </tr>
      <tr>
        <td id="L959" class="blob-num js-line-number" data-line-number="959"></td>
        <td id="LC959" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * |----------------------------------|-------------------------------------|</span></td>
      </tr>
      <tr>
        <td id="L960" class="blob-num js-line-number" data-line-number="960"></td>
        <td id="LC960" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * | <span class="pl-en">{<span class="pl-k">@link</span> <span class="pl-smi">ng.$animate#enter</span> enter}</span>  | when the new element is inserted to the DOM |</span></td>
      </tr>
      <tr>
        <td id="L961" class="blob-num js-line-number" data-line-number="961"></td>
        <td id="LC961" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * | <span class="pl-en">{<span class="pl-k">@link</span> <span class="pl-smi">ng.$animate#leave</span> leave}</span>  | when the old element is removed from to the DOM  |</span></td>
      </tr>
      <tr>
        <td id="L962" class="blob-num js-line-number" data-line-number="962"></td>
        <td id="LC962" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L963" class="blob-num js-line-number" data-line-number="963"></td>
        <td id="LC963" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * The enter and leave animation occur concurrently.</span></td>
      </tr>
      <tr>
        <td id="L964" class="blob-num js-line-number" data-line-number="964"></td>
        <td id="LC964" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L965" class="blob-num js-line-number" data-line-number="965"></td>
        <td id="LC965" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * @scope</span></td>
      </tr>
      <tr>
        <td id="L966" class="blob-num js-line-number" data-line-number="966"></td>
        <td id="LC966" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * @priority 400</span></td>
      </tr>
      <tr>
        <td id="L967" class="blob-num js-line-number" data-line-number="967"></td>
        <td id="LC967" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-k">@param</span> <span class="pl-en">{string=}</span> <span class="pl-smi">onload</span> Expression to evaluate whenever the view updates.</span></td>
      </tr>
      <tr>
        <td id="L968" class="blob-num js-line-number" data-line-number="968"></td>
        <td id="LC968" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L969" class="blob-num js-line-number" data-line-number="969"></td>
        <td id="LC969" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-k">@param</span> <span class="pl-en">{string=}</span> <span class="pl-smi">autoscroll</span> Whether `ngView` should call <span class="pl-en">{<span class="pl-k">@link</span> <span class="pl-smi">ng.$anchorScroll</span></span></span></td>
      </tr>
      <tr>
        <td id="L970" class="blob-num js-line-number" data-line-number="970"></td>
        <td id="LC970" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-en"> *                  $anchorScroll}</span> to scroll the viewport after the view is updated.</span></td>
      </tr>
      <tr>
        <td id="L971" class="blob-num js-line-number" data-line-number="971"></td>
        <td id="LC971" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L972" class="blob-num js-line-number" data-line-number="972"></td>
        <td id="LC972" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *                  - If the attribute is not set, disable scrolling.</span></td>
      </tr>
      <tr>
        <td id="L973" class="blob-num js-line-number" data-line-number="973"></td>
        <td id="LC973" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *                  - If the attribute is set without value, enable scrolling.</span></td>
      </tr>
      <tr>
        <td id="L974" class="blob-num js-line-number" data-line-number="974"></td>
        <td id="LC974" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *                  - Otherwise enable scrolling only if the `autoscroll` attribute value evaluated</span></td>
      </tr>
      <tr>
        <td id="L975" class="blob-num js-line-number" data-line-number="975"></td>
        <td id="LC975" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *                    as an expression yields a truthy value.</span></td>
      </tr>
      <tr>
        <td id="L976" class="blob-num js-line-number" data-line-number="976"></td>
        <td id="LC976" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-k">@example</span></span></td>
      </tr>
      <tr>
        <td id="L977" class="blob-num js-line-number" data-line-number="977"></td>
        <td id="LC977" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    <span class="pl-s1"><span class="pl-k">&lt;</span>example name<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>ngView-directive<span class="pl-pds">&quot;</span></span> <span class="pl-c1">module</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>ngViewExample<span class="pl-pds">&quot;</span></span></span></span></td>
      </tr>
      <tr>
        <td id="L978" class="blob-num js-line-number" data-line-number="978"></td>
        <td id="LC978" class="blob-code blob-code-inner js-file-line"><span class="pl-c">             <span class="pl-s1">deps<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>angular-route.js;angular-animate.js<span class="pl-pds">&quot;</span></span></span></span></td>
      </tr>
      <tr>
        <td id="L979" class="blob-num js-line-number" data-line-number="979"></td>
        <td id="LC979" class="blob-code blob-code-inner js-file-line"><span class="pl-c">             <span class="pl-s1">animations<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>true<span class="pl-pds">&quot;</span></span> fixBase<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>true<span class="pl-pds">&quot;</span></span><span class="pl-k">&gt;</span></span></span></td>
      </tr>
      <tr>
        <td id="L980" class="blob-num js-line-number" data-line-number="980"></td>
        <td id="LC980" class="blob-code blob-code-inner js-file-line"><span class="pl-c">      <span class="pl-s1"><span class="pl-k">&lt;</span>file name<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>index.html<span class="pl-pds">&quot;</span></span><span class="pl-k">&gt;</span></span></span></td>
      </tr>
      <tr>
        <td id="L981" class="blob-num js-line-number" data-line-number="981"></td>
        <td id="LC981" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        <span class="pl-s1"><span class="pl-k">&lt;</span>div ng<span class="pl-k">-</span>controller<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>MainCtrl as main<span class="pl-pds">&quot;</span></span><span class="pl-k">&gt;</span></span></span></td>
      </tr>
      <tr>
        <td id="L982" class="blob-num js-line-number" data-line-number="982"></td>
        <td id="LC982" class="blob-code blob-code-inner js-file-line"><span class="pl-c">          <span class="pl-s1">Choose<span class="pl-k">:</span></span></span></td>
      </tr>
      <tr>
        <td id="L983" class="blob-num js-line-number" data-line-number="983"></td>
        <td id="LC983" class="blob-code blob-code-inner js-file-line"><span class="pl-c">          <span class="pl-s1"><span class="pl-k">&lt;</span>a href<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>Book/Moby<span class="pl-pds">&quot;</span></span><span class="pl-k">&gt;</span>Moby<span class="pl-k">&lt;</span><span class="pl-k">/</span>a<span class="pl-k">&gt;</span> <span class="pl-k">|</span></span></span></td>
      </tr>
      <tr>
        <td id="L984" class="blob-num js-line-number" data-line-number="984"></td>
        <td id="LC984" class="blob-code blob-code-inner js-file-line"><span class="pl-c">          <span class="pl-s1"><span class="pl-k">&lt;</span>a href<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>Book/Moby/ch/1<span class="pl-pds">&quot;</span></span><span class="pl-k">&gt;</span>Moby<span class="pl-k">:</span> Ch1<span class="pl-k">&lt;</span><span class="pl-k">/</span>a<span class="pl-k">&gt;</span> <span class="pl-k">|</span></span></span></td>
      </tr>
      <tr>
        <td id="L985" class="blob-num js-line-number" data-line-number="985"></td>
        <td id="LC985" class="blob-code blob-code-inner js-file-line"><span class="pl-c">          <span class="pl-s1"><span class="pl-k">&lt;</span>a href<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>Book/Gatsby<span class="pl-pds">&quot;</span></span><span class="pl-k">&gt;</span>Gatsby<span class="pl-k">&lt;</span><span class="pl-k">/</span>a<span class="pl-k">&gt;</span> <span class="pl-k">|</span></span></span></td>
      </tr>
      <tr>
        <td id="L986" class="blob-num js-line-number" data-line-number="986"></td>
        <td id="LC986" class="blob-code blob-code-inner js-file-line"><span class="pl-c">          <span class="pl-s1"><span class="pl-k">&lt;</span>a href<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>Book/Gatsby/ch/4?key=value<span class="pl-pds">&quot;</span></span><span class="pl-k">&gt;</span>Gatsby<span class="pl-k">:</span> Ch4<span class="pl-k">&lt;</span><span class="pl-k">/</span>a<span class="pl-k">&gt;</span> <span class="pl-k">|</span></span></span></td>
      </tr>
      <tr>
        <td id="L987" class="blob-num js-line-number" data-line-number="987"></td>
        <td id="LC987" class="blob-code blob-code-inner js-file-line"><span class="pl-c">          <span class="pl-s1"><span class="pl-k">&lt;</span>a href<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>Book/Scarlet<span class="pl-pds">&quot;</span></span><span class="pl-k">&gt;</span>Scarlet Letter<span class="pl-k">&lt;</span><span class="pl-k">/</span>a<span class="pl-k">&gt;&lt;</span>br<span class="pl-k">/</span><span class="pl-k">&gt;</span></span></span></td>
      </tr>
      <tr>
        <td id="L988" class="blob-num js-line-number" data-line-number="988"></td>
        <td id="LC988" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L989" class="blob-num js-line-number" data-line-number="989"></td>
        <td id="LC989" class="blob-code blob-code-inner js-file-line"><span class="pl-c">          <span class="pl-s1"><span class="pl-k">&lt;</span>div <span class="pl-k">class</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>view-animate-container<span class="pl-pds">&quot;</span></span><span class="pl-k">&gt;</span></span></span></td>
      </tr>
      <tr>
        <td id="L990" class="blob-num js-line-number" data-line-number="990"></td>
        <td id="LC990" class="blob-code blob-code-inner js-file-line"><span class="pl-c">            <span class="pl-s1"><span class="pl-k">&lt;</span>div ng<span class="pl-k">-</span>view <span class="pl-k">class</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>view-animate<span class="pl-pds">&quot;</span></span><span class="pl-k">&gt;&lt;</span><span class="pl-k">/</span>div<span class="pl-k">&gt;</span></span></span></td>
      </tr>
      <tr>
        <td id="L991" class="blob-num js-line-number" data-line-number="991"></td>
        <td id="LC991" class="blob-code blob-code-inner js-file-line"><span class="pl-c">          <span class="pl-s1"><span class="pl-k">&lt;</span><span class="pl-k">/</span>div<span class="pl-k">&gt;</span></span></span></td>
      </tr>
      <tr>
        <td id="L992" class="blob-num js-line-number" data-line-number="992"></td>
        <td id="LC992" class="blob-code blob-code-inner js-file-line"><span class="pl-c">          <span class="pl-s1"><span class="pl-k">&lt;</span>hr <span class="pl-k">/</span><span class="pl-k">&gt;</span></span></span></td>
      </tr>
      <tr>
        <td id="L993" class="blob-num js-line-number" data-line-number="993"></td>
        <td id="LC993" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L994" class="blob-num js-line-number" data-line-number="994"></td>
        <td id="LC994" class="blob-code blob-code-inner js-file-line"><span class="pl-c">          <span class="pl-s1"><span class="pl-k">&lt;</span>pre<span class="pl-k">&gt;</span><span class="pl-smi">$location</span>.<span class="pl-en">path</span>() <span class="pl-k">=</span> {{<span class="pl-smi">main</span>.<span class="pl-smi">$location</span>.<span class="pl-en">path</span>()}}<span class="pl-k">&lt;</span><span class="pl-k">/</span>pre<span class="pl-k">&gt;</span></span></span></td>
      </tr>
      <tr>
        <td id="L995" class="blob-num js-line-number" data-line-number="995"></td>
        <td id="LC995" class="blob-code blob-code-inner js-file-line"><span class="pl-c">          <span class="pl-s1"><span class="pl-k">&lt;</span>pre<span class="pl-k">&gt;</span><span class="pl-smi">$route</span>.<span class="pl-c1">current</span>.<span class="pl-smi">templateUrl</span> <span class="pl-k">=</span> {{<span class="pl-smi">main</span>.<span class="pl-smi">$route</span>.<span class="pl-c1">current</span>.<span class="pl-smi">templateUrl</span>}}<span class="pl-k">&lt;</span><span class="pl-k">/</span>pre<span class="pl-k">&gt;</span></span></span></td>
      </tr>
      <tr>
        <td id="L996" class="blob-num js-line-number" data-line-number="996"></td>
        <td id="LC996" class="blob-code blob-code-inner js-file-line"><span class="pl-c">          <span class="pl-s1"><span class="pl-k">&lt;</span>pre<span class="pl-k">&gt;</span><span class="pl-smi">$route</span>.<span class="pl-c1">current</span>.<span class="pl-smi">params</span> <span class="pl-k">=</span> {{<span class="pl-smi">main</span>.<span class="pl-smi">$route</span>.<span class="pl-c1">current</span>.<span class="pl-smi">params</span>}}<span class="pl-k">&lt;</span><span class="pl-k">/</span>pre<span class="pl-k">&gt;</span></span></span></td>
      </tr>
      <tr>
        <td id="L997" class="blob-num js-line-number" data-line-number="997"></td>
        <td id="LC997" class="blob-code blob-code-inner js-file-line"><span class="pl-c">          <span class="pl-s1"><span class="pl-k">&lt;</span>pre<span class="pl-k">&gt;</span>$routeParams <span class="pl-k">=</span> {{<span class="pl-smi">main</span>.<span class="pl-smi">$routeParams</span>}}<span class="pl-k">&lt;</span><span class="pl-k">/</span>pre<span class="pl-k">&gt;</span></span></span></td>
      </tr>
      <tr>
        <td id="L998" class="blob-num js-line-number" data-line-number="998"></td>
        <td id="LC998" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        <span class="pl-s1"><span class="pl-k">&lt;</span><span class="pl-k">/</span>div<span class="pl-k">&gt;</span></span></span></td>
      </tr>
      <tr>
        <td id="L999" class="blob-num js-line-number" data-line-number="999"></td>
        <td id="LC999" class="blob-code blob-code-inner js-file-line"><span class="pl-c">      <span class="pl-s1"><span class="pl-k">&lt;</span><span class="pl-k">/</span>file<span class="pl-k">&gt;</span></span></span></td>
      </tr>
      <tr>
        <td id="L1000" class="blob-num js-line-number" data-line-number="1000"></td>
        <td id="LC1000" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L1001" class="blob-num js-line-number" data-line-number="1001"></td>
        <td id="LC1001" class="blob-code blob-code-inner js-file-line"><span class="pl-c">      <span class="pl-s1"><span class="pl-k">&lt;</span>file name<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>book.html<span class="pl-pds">&quot;</span></span><span class="pl-k">&gt;</span></span></span></td>
      </tr>
      <tr>
        <td id="L1002" class="blob-num js-line-number" data-line-number="1002"></td>
        <td id="LC1002" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        <span class="pl-s1"><span class="pl-k">&lt;</span>div<span class="pl-k">&gt;</span></span></span></td>
      </tr>
      <tr>
        <td id="L1003" class="blob-num js-line-number" data-line-number="1003"></td>
        <td id="LC1003" class="blob-code blob-code-inner js-file-line"><span class="pl-c">          <span class="pl-s1">controller<span class="pl-k">:</span> {{<span class="pl-smi">book</span>.<span class="pl-c1">name</span>}}<span class="pl-k">&lt;</span>br <span class="pl-k">/</span><span class="pl-k">&gt;</span></span></span></td>
      </tr>
      <tr>
        <td id="L1004" class="blob-num js-line-number" data-line-number="1004"></td>
        <td id="LC1004" class="blob-code blob-code-inner js-file-line"><span class="pl-c">          <span class="pl-s1">Book Id<span class="pl-k">:</span> {{<span class="pl-smi">book</span>.<span class="pl-smi">params</span>.<span class="pl-smi">bookId</span>}}<span class="pl-k">&lt;</span>br <span class="pl-k">/</span><span class="pl-k">&gt;</span></span></span></td>
      </tr>
      <tr>
        <td id="L1005" class="blob-num js-line-number" data-line-number="1005"></td>
        <td id="LC1005" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        <span class="pl-s1"><span class="pl-k">&lt;</span><span class="pl-k">/</span>div<span class="pl-k">&gt;</span></span></span></td>
      </tr>
      <tr>
        <td id="L1006" class="blob-num js-line-number" data-line-number="1006"></td>
        <td id="LC1006" class="blob-code blob-code-inner js-file-line"><span class="pl-c">      <span class="pl-s1"><span class="pl-k">&lt;</span><span class="pl-k">/</span>file<span class="pl-k">&gt;</span></span></span></td>
      </tr>
      <tr>
        <td id="L1007" class="blob-num js-line-number" data-line-number="1007"></td>
        <td id="LC1007" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L1008" class="blob-num js-line-number" data-line-number="1008"></td>
        <td id="LC1008" class="blob-code blob-code-inner js-file-line"><span class="pl-c">      <span class="pl-s1"><span class="pl-k">&lt;</span>file name<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>chapter.html<span class="pl-pds">&quot;</span></span><span class="pl-k">&gt;</span></span></span></td>
      </tr>
      <tr>
        <td id="L1009" class="blob-num js-line-number" data-line-number="1009"></td>
        <td id="LC1009" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        <span class="pl-s1"><span class="pl-k">&lt;</span>div<span class="pl-k">&gt;</span></span></span></td>
      </tr>
      <tr>
        <td id="L1010" class="blob-num js-line-number" data-line-number="1010"></td>
        <td id="LC1010" class="blob-code blob-code-inner js-file-line"><span class="pl-c">          <span class="pl-s1">controller<span class="pl-k">:</span> {{<span class="pl-smi">chapter</span>.<span class="pl-c1">name</span>}}<span class="pl-k">&lt;</span>br <span class="pl-k">/</span><span class="pl-k">&gt;</span></span></span></td>
      </tr>
      <tr>
        <td id="L1011" class="blob-num js-line-number" data-line-number="1011"></td>
        <td id="LC1011" class="blob-code blob-code-inner js-file-line"><span class="pl-c">          <span class="pl-s1">Book Id<span class="pl-k">:</span> {{<span class="pl-smi">chapter</span>.<span class="pl-smi">params</span>.<span class="pl-smi">bookId</span>}}<span class="pl-k">&lt;</span>br <span class="pl-k">/</span><span class="pl-k">&gt;</span></span></span></td>
      </tr>
      <tr>
        <td id="L1012" class="blob-num js-line-number" data-line-number="1012"></td>
        <td id="LC1012" class="blob-code blob-code-inner js-file-line"><span class="pl-c">          <span class="pl-s1">Chapter Id<span class="pl-k">:</span> {{<span class="pl-smi">chapter</span>.<span class="pl-smi">params</span>.<span class="pl-smi">chapterId</span>}}</span></span></td>
      </tr>
      <tr>
        <td id="L1013" class="blob-num js-line-number" data-line-number="1013"></td>
        <td id="LC1013" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        <span class="pl-s1"><span class="pl-k">&lt;</span><span class="pl-k">/</span>div<span class="pl-k">&gt;</span></span></span></td>
      </tr>
      <tr>
        <td id="L1014" class="blob-num js-line-number" data-line-number="1014"></td>
        <td id="LC1014" class="blob-code blob-code-inner js-file-line"><span class="pl-c">      <span class="pl-s1"><span class="pl-k">&lt;</span><span class="pl-k">/</span>file<span class="pl-k">&gt;</span></span></span></td>
      </tr>
      <tr>
        <td id="L1015" class="blob-num js-line-number" data-line-number="1015"></td>
        <td id="LC1015" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L1016" class="blob-num js-line-number" data-line-number="1016"></td>
        <td id="LC1016" class="blob-code blob-code-inner js-file-line"><span class="pl-c">      <span class="pl-s1"><span class="pl-k">&lt;</span>file name<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>animations.css<span class="pl-pds">&quot;</span></span><span class="pl-k">&gt;</span></span></span></td>
      </tr>
      <tr>
        <td id="L1017" class="blob-num js-line-number" data-line-number="1017"></td>
        <td id="LC1017" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        <span class="pl-s1">.<span class="pl-smi">view</span><span class="pl-k">-</span>animate<span class="pl-k">-</span>container {</span></span></td>
      </tr>
      <tr>
        <td id="L1018" class="blob-num js-line-number" data-line-number="1018"></td>
        <td id="LC1018" class="blob-code blob-code-inner js-file-line"><span class="pl-c">          <span class="pl-s1">position<span class="pl-k">:</span>relative;</span></span></td>
      </tr>
      <tr>
        <td id="L1019" class="blob-num js-line-number" data-line-number="1019"></td>
        <td id="LC1019" class="blob-code blob-code-inner js-file-line"><span class="pl-c">          <span class="pl-s1">height<span class="pl-k">:</span><span class="pl-ii">100px</span><span class="pl-k">!</span>important;</span></span></td>
      </tr>
      <tr>
        <td id="L1020" class="blob-num js-line-number" data-line-number="1020"></td>
        <td id="LC1020" class="blob-code blob-code-inner js-file-line"><span class="pl-c">          <span class="pl-s1">background<span class="pl-k">:</span>white;</span></span></td>
      </tr>
      <tr>
        <td id="L1021" class="blob-num js-line-number" data-line-number="1021"></td>
        <td id="LC1021" class="blob-code blob-code-inner js-file-line"><span class="pl-c">          <span class="pl-s1">border<span class="pl-k">:</span><span class="pl-ii">1px</span> solid black;</span></span></td>
      </tr>
      <tr>
        <td id="L1022" class="blob-num js-line-number" data-line-number="1022"></td>
        <td id="LC1022" class="blob-code blob-code-inner js-file-line"><span class="pl-c">          <span class="pl-s1">height<span class="pl-k">:</span><span class="pl-ii">40px</span>;</span></span></td>
      </tr>
      <tr>
        <td id="L1023" class="blob-num js-line-number" data-line-number="1023"></td>
        <td id="LC1023" class="blob-code blob-code-inner js-file-line"><span class="pl-c">          <span class="pl-s1">overflow<span class="pl-k">:</span>hidden;</span></span></td>
      </tr>
      <tr>
        <td id="L1024" class="blob-num js-line-number" data-line-number="1024"></td>
        <td id="LC1024" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        <span class="pl-s1">}</span></span></td>
      </tr>
      <tr>
        <td id="L1025" class="blob-num js-line-number" data-line-number="1025"></td>
        <td id="LC1025" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L1026" class="blob-num js-line-number" data-line-number="1026"></td>
        <td id="LC1026" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        <span class="pl-s1">.<span class="pl-smi">view</span><span class="pl-k">-</span>animate {</span></span></td>
      </tr>
      <tr>
        <td id="L1027" class="blob-num js-line-number" data-line-number="1027"></td>
        <td id="LC1027" class="blob-code blob-code-inner js-file-line"><span class="pl-c">          <span class="pl-s1">padding<span class="pl-k">:</span><span class="pl-ii">10px</span>;</span></span></td>
      </tr>
      <tr>
        <td id="L1028" class="blob-num js-line-number" data-line-number="1028"></td>
        <td id="LC1028" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        <span class="pl-s1">}</span></span></td>
      </tr>
      <tr>
        <td id="L1029" class="blob-num js-line-number" data-line-number="1029"></td>
        <td id="LC1029" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L1030" class="blob-num js-line-number" data-line-number="1030"></td>
        <td id="LC1030" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        <span class="pl-s1">.<span class="pl-smi">view</span><span class="pl-k">-</span><span class="pl-smi">animate</span>.<span class="pl-smi">ng</span><span class="pl-k">-</span>enter, .<span class="pl-smi">view</span><span class="pl-k">-</span><span class="pl-smi">animate</span>.<span class="pl-smi">ng</span><span class="pl-k">-</span>leave {</span></span></td>
      </tr>
      <tr>
        <td id="L1031" class="blob-num js-line-number" data-line-number="1031"></td>
        <td id="LC1031" class="blob-code blob-code-inner js-file-line"><span class="pl-c">          <span class="pl-s1">transition<span class="pl-k">:</span>all cubic<span class="pl-k">-</span><span class="pl-en">bezier</span>(<span class="pl-c1">0.250</span>, <span class="pl-c1">0.460</span>, <span class="pl-c1">0.450</span>, <span class="pl-c1">0.940</span>) <span class="pl-ii">1</span>.<span class="pl-ii">5s</span>;</span></span></td>
      </tr>
      <tr>
        <td id="L1032" class="blob-num js-line-number" data-line-number="1032"></td>
        <td id="LC1032" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L1033" class="blob-num js-line-number" data-line-number="1033"></td>
        <td id="LC1033" class="blob-code blob-code-inner js-file-line"><span class="pl-c">          <span class="pl-s1">display<span class="pl-k">:</span>block;</span></span></td>
      </tr>
      <tr>
        <td id="L1034" class="blob-num js-line-number" data-line-number="1034"></td>
        <td id="LC1034" class="blob-code blob-code-inner js-file-line"><span class="pl-c">          <span class="pl-s1">width<span class="pl-k">:</span><span class="pl-c1">100</span><span class="pl-k">%</span>;</span></span></td>
      </tr>
      <tr>
        <td id="L1035" class="blob-num js-line-number" data-line-number="1035"></td>
        <td id="LC1035" class="blob-code blob-code-inner js-file-line"><span class="pl-c">          <span class="pl-s1">border<span class="pl-k">-</span>left<span class="pl-k">:</span><span class="pl-ii">1px</span> solid black;</span></span></td>
      </tr>
      <tr>
        <td id="L1036" class="blob-num js-line-number" data-line-number="1036"></td>
        <td id="LC1036" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L1037" class="blob-num js-line-number" data-line-number="1037"></td>
        <td id="LC1037" class="blob-code blob-code-inner js-file-line"><span class="pl-c">          <span class="pl-s1">position<span class="pl-k">:</span>absolute;</span></span></td>
      </tr>
      <tr>
        <td id="L1038" class="blob-num js-line-number" data-line-number="1038"></td>
        <td id="LC1038" class="blob-code blob-code-inner js-file-line"><span class="pl-c">          <span class="pl-s1">top<span class="pl-k">:</span><span class="pl-c1">0</span>;</span></span></td>
      </tr>
      <tr>
        <td id="L1039" class="blob-num js-line-number" data-line-number="1039"></td>
        <td id="LC1039" class="blob-code blob-code-inner js-file-line"><span class="pl-c">          <span class="pl-s1">left<span class="pl-k">:</span><span class="pl-c1">0</span>;</span></span></td>
      </tr>
      <tr>
        <td id="L1040" class="blob-num js-line-number" data-line-number="1040"></td>
        <td id="LC1040" class="blob-code blob-code-inner js-file-line"><span class="pl-c">          <span class="pl-s1">right<span class="pl-k">:</span><span class="pl-c1">0</span>;</span></span></td>
      </tr>
      <tr>
        <td id="L1041" class="blob-num js-line-number" data-line-number="1041"></td>
        <td id="LC1041" class="blob-code blob-code-inner js-file-line"><span class="pl-c">          <span class="pl-s1">bottom<span class="pl-k">:</span><span class="pl-c1">0</span>;</span></span></td>
      </tr>
      <tr>
        <td id="L1042" class="blob-num js-line-number" data-line-number="1042"></td>
        <td id="LC1042" class="blob-code blob-code-inner js-file-line"><span class="pl-c">          <span class="pl-s1">padding<span class="pl-k">:</span><span class="pl-ii">10px</span>;</span></span></td>
      </tr>
      <tr>
        <td id="L1043" class="blob-num js-line-number" data-line-number="1043"></td>
        <td id="LC1043" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        <span class="pl-s1">}</span></span></td>
      </tr>
      <tr>
        <td id="L1044" class="blob-num js-line-number" data-line-number="1044"></td>
        <td id="LC1044" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L1045" class="blob-num js-line-number" data-line-number="1045"></td>
        <td id="LC1045" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        <span class="pl-s1">.<span class="pl-smi">view</span><span class="pl-k">-</span><span class="pl-smi">animate</span>.<span class="pl-smi">ng</span><span class="pl-k">-</span>enter {</span></span></td>
      </tr>
      <tr>
        <td id="L1046" class="blob-num js-line-number" data-line-number="1046"></td>
        <td id="LC1046" class="blob-code blob-code-inner js-file-line"><span class="pl-c">          <span class="pl-s1">left<span class="pl-k">:</span><span class="pl-c1">100</span><span class="pl-k">%</span>;</span></span></td>
      </tr>
      <tr>
        <td id="L1047" class="blob-num js-line-number" data-line-number="1047"></td>
        <td id="LC1047" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        <span class="pl-s1">}</span></span></td>
      </tr>
      <tr>
        <td id="L1048" class="blob-num js-line-number" data-line-number="1048"></td>
        <td id="LC1048" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        <span class="pl-s1">.<span class="pl-smi">view</span><span class="pl-k">-</span><span class="pl-smi">animate</span>.<span class="pl-smi">ng</span><span class="pl-k">-</span><span class="pl-smi">enter</span>.<span class="pl-smi">ng</span><span class="pl-k">-</span>enter<span class="pl-k">-</span>active {</span></span></td>
      </tr>
      <tr>
        <td id="L1049" class="blob-num js-line-number" data-line-number="1049"></td>
        <td id="LC1049" class="blob-code blob-code-inner js-file-line"><span class="pl-c">          <span class="pl-s1">left<span class="pl-k">:</span><span class="pl-c1">0</span>;</span></span></td>
      </tr>
      <tr>
        <td id="L1050" class="blob-num js-line-number" data-line-number="1050"></td>
        <td id="LC1050" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        <span class="pl-s1">}</span></span></td>
      </tr>
      <tr>
        <td id="L1051" class="blob-num js-line-number" data-line-number="1051"></td>
        <td id="LC1051" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        <span class="pl-s1">.<span class="pl-smi">view</span><span class="pl-k">-</span><span class="pl-smi">animate</span>.<span class="pl-smi">ng</span><span class="pl-k">-</span><span class="pl-smi">leave</span>.<span class="pl-smi">ng</span><span class="pl-k">-</span>leave<span class="pl-k">-</span>active {</span></span></td>
      </tr>
      <tr>
        <td id="L1052" class="blob-num js-line-number" data-line-number="1052"></td>
        <td id="LC1052" class="blob-code blob-code-inner js-file-line"><span class="pl-c">          <span class="pl-s1">left<span class="pl-k">:</span><span class="pl-k">-</span><span class="pl-c1">100</span><span class="pl-k">%</span>;</span></span></td>
      </tr>
      <tr>
        <td id="L1053" class="blob-num js-line-number" data-line-number="1053"></td>
        <td id="LC1053" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        <span class="pl-s1">}</span></span></td>
      </tr>
      <tr>
        <td id="L1054" class="blob-num js-line-number" data-line-number="1054"></td>
        <td id="LC1054" class="blob-code blob-code-inner js-file-line"><span class="pl-c">      <span class="pl-s1"><span class="pl-k">&lt;</span><span class="pl-k">/</span>file<span class="pl-k">&gt;</span></span></span></td>
      </tr>
      <tr>
        <td id="L1055" class="blob-num js-line-number" data-line-number="1055"></td>
        <td id="LC1055" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L1056" class="blob-num js-line-number" data-line-number="1056"></td>
        <td id="LC1056" class="blob-code blob-code-inner js-file-line"><span class="pl-c">      <span class="pl-s1"><span class="pl-k">&lt;</span>file name<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>script.js<span class="pl-pds">&quot;</span></span><span class="pl-k">&gt;</span></span></span></td>
      </tr>
      <tr>
        <td id="L1057" class="blob-num js-line-number" data-line-number="1057"></td>
        <td id="LC1057" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        <span class="pl-s1"><span class="pl-smi">angular</span>.<span class="pl-en">module</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>ngViewExample<span class="pl-pds">&#39;</span></span>, [<span class="pl-s"><span class="pl-pds">&#39;</span>ngRoute<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>ngAnimate<span class="pl-pds">&#39;</span></span>])</span></span></td>
      </tr>
      <tr>
        <td id="L1058" class="blob-num js-line-number" data-line-number="1058"></td>
        <td id="LC1058" class="blob-code blob-code-inner js-file-line"><span class="pl-c">          <span class="pl-s1">.<span class="pl-en">config</span>([<span class="pl-s"><span class="pl-pds">&#39;</span>$routeProvider<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>$locationProvider<span class="pl-pds">&#39;</span></span>,</span></span></td>
      </tr>
      <tr>
        <td id="L1059" class="blob-num js-line-number" data-line-number="1059"></td>
        <td id="LC1059" class="blob-code blob-code-inner js-file-line"><span class="pl-c">            <span class="pl-s1"><span class="pl-k">function</span>(<span class="pl-smi">$routeProvider</span>, <span class="pl-smi">$locationProvider</span>) {</span></span></td>
      </tr>
      <tr>
        <td id="L1060" class="blob-num js-line-number" data-line-number="1060"></td>
        <td id="LC1060" class="blob-code blob-code-inner js-file-line"><span class="pl-c">              <span class="pl-s1">$routeProvider</span></span></td>
      </tr>
      <tr>
        <td id="L1061" class="blob-num js-line-number" data-line-number="1061"></td>
        <td id="LC1061" class="blob-code blob-code-inner js-file-line"><span class="pl-c">                <span class="pl-s1">.<span class="pl-en">when</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>/Book/:bookId<span class="pl-pds">&#39;</span></span>, {</span></span></td>
      </tr>
      <tr>
        <td id="L1062" class="blob-num js-line-number" data-line-number="1062"></td>
        <td id="LC1062" class="blob-code blob-code-inner js-file-line"><span class="pl-c">                  <span class="pl-s1">templateUrl<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>book.html<span class="pl-pds">&#39;</span></span>,</span></span></td>
      </tr>
      <tr>
        <td id="L1063" class="blob-num js-line-number" data-line-number="1063"></td>
        <td id="LC1063" class="blob-code blob-code-inner js-file-line"><span class="pl-c">                  <span class="pl-s1">controller<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>BookCtrl<span class="pl-pds">&#39;</span></span>,</span></span></td>
      </tr>
      <tr>
        <td id="L1064" class="blob-num js-line-number" data-line-number="1064"></td>
        <td id="LC1064" class="blob-code blob-code-inner js-file-line"><span class="pl-c">                  <span class="pl-s1">controllerAs<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>book<span class="pl-pds">&#39;</span></span></span></span></td>
      </tr>
      <tr>
        <td id="L1065" class="blob-num js-line-number" data-line-number="1065"></td>
        <td id="LC1065" class="blob-code blob-code-inner js-file-line"><span class="pl-c">                <span class="pl-s1">})</span></span></td>
      </tr>
      <tr>
        <td id="L1066" class="blob-num js-line-number" data-line-number="1066"></td>
        <td id="LC1066" class="blob-code blob-code-inner js-file-line"><span class="pl-c">                <span class="pl-s1">.<span class="pl-en">when</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>/Book/:bookId/ch/:chapterId<span class="pl-pds">&#39;</span></span>, {</span></span></td>
      </tr>
      <tr>
        <td id="L1067" class="blob-num js-line-number" data-line-number="1067"></td>
        <td id="LC1067" class="blob-code blob-code-inner js-file-line"><span class="pl-c">                  <span class="pl-s1">templateUrl<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>chapter.html<span class="pl-pds">&#39;</span></span>,</span></span></td>
      </tr>
      <tr>
        <td id="L1068" class="blob-num js-line-number" data-line-number="1068"></td>
        <td id="LC1068" class="blob-code blob-code-inner js-file-line"><span class="pl-c">                  <span class="pl-s1">controller<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>ChapterCtrl<span class="pl-pds">&#39;</span></span>,</span></span></td>
      </tr>
      <tr>
        <td id="L1069" class="blob-num js-line-number" data-line-number="1069"></td>
        <td id="LC1069" class="blob-code blob-code-inner js-file-line"><span class="pl-c">                  <span class="pl-s1">controllerAs<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>chapter<span class="pl-pds">&#39;</span></span></span></span></td>
      </tr>
      <tr>
        <td id="L1070" class="blob-num js-line-number" data-line-number="1070"></td>
        <td id="LC1070" class="blob-code blob-code-inner js-file-line"><span class="pl-c">                <span class="pl-s1">});</span></span></td>
      </tr>
      <tr>
        <td id="L1071" class="blob-num js-line-number" data-line-number="1071"></td>
        <td id="LC1071" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L1072" class="blob-num js-line-number" data-line-number="1072"></td>
        <td id="LC1072" class="blob-code blob-code-inner js-file-line"><span class="pl-c">              <span class="pl-s1"><span class="pl-smi">$locationProvider</span>.<span class="pl-en">html5Mode</span>(<span class="pl-c1">true</span>);</span></span></td>
      </tr>
      <tr>
        <td id="L1073" class="blob-num js-line-number" data-line-number="1073"></td>
        <td id="LC1073" class="blob-code blob-code-inner js-file-line"><span class="pl-c">          <span class="pl-s1">}])</span></span></td>
      </tr>
      <tr>
        <td id="L1074" class="blob-num js-line-number" data-line-number="1074"></td>
        <td id="LC1074" class="blob-code blob-code-inner js-file-line"><span class="pl-c">          <span class="pl-s1">.<span class="pl-en">controller</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>MainCtrl<span class="pl-pds">&#39;</span></span>, [<span class="pl-s"><span class="pl-pds">&#39;</span>$route<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>$routeParams<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>$location<span class="pl-pds">&#39;</span></span>,</span></span></td>
      </tr>
      <tr>
        <td id="L1075" class="blob-num js-line-number" data-line-number="1075"></td>
        <td id="LC1075" class="blob-code blob-code-inner js-file-line"><span class="pl-c">            <span class="pl-s1"><span class="pl-k">function</span> <span class="pl-en">MainCtrl</span>(<span class="pl-smi">$route</span>, <span class="pl-smi">$routeParams</span>, <span class="pl-smi">$location</span>) {</span></span></td>
      </tr>
      <tr>
        <td id="L1076" class="blob-num js-line-number" data-line-number="1076"></td>
        <td id="LC1076" class="blob-code blob-code-inner js-file-line"><span class="pl-c">              <span class="pl-s1"><span class="pl-c1">this</span>.<span class="pl-smi">$route</span> <span class="pl-k">=</span> $route;</span></span></td>
      </tr>
      <tr>
        <td id="L1077" class="blob-num js-line-number" data-line-number="1077"></td>
        <td id="LC1077" class="blob-code blob-code-inner js-file-line"><span class="pl-c">              <span class="pl-s1"><span class="pl-c1">this</span>.<span class="pl-smi">$location</span> <span class="pl-k">=</span> $location;</span></span></td>
      </tr>
      <tr>
        <td id="L1078" class="blob-num js-line-number" data-line-number="1078"></td>
        <td id="LC1078" class="blob-code blob-code-inner js-file-line"><span class="pl-c">              <span class="pl-s1"><span class="pl-c1">this</span>.<span class="pl-smi">$routeParams</span> <span class="pl-k">=</span> $routeParams;</span></span></td>
      </tr>
      <tr>
        <td id="L1079" class="blob-num js-line-number" data-line-number="1079"></td>
        <td id="LC1079" class="blob-code blob-code-inner js-file-line"><span class="pl-c">          <span class="pl-s1">}])</span></span></td>
      </tr>
      <tr>
        <td id="L1080" class="blob-num js-line-number" data-line-number="1080"></td>
        <td id="LC1080" class="blob-code blob-code-inner js-file-line"><span class="pl-c">          <span class="pl-s1">.<span class="pl-en">controller</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>BookCtrl<span class="pl-pds">&#39;</span></span>, [<span class="pl-s"><span class="pl-pds">&#39;</span>$routeParams<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span> <span class="pl-en">BookCtrl</span>(<span class="pl-smi">$routeParams</span>) {</span></span></td>
      </tr>
      <tr>
        <td id="L1081" class="blob-num js-line-number" data-line-number="1081"></td>
        <td id="LC1081" class="blob-code blob-code-inner js-file-line"><span class="pl-c">            <span class="pl-s1"><span class="pl-c1">this</span>.<span class="pl-c1">name</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>BookCtrl<span class="pl-pds">&#39;</span></span>;</span></span></td>
      </tr>
      <tr>
        <td id="L1082" class="blob-num js-line-number" data-line-number="1082"></td>
        <td id="LC1082" class="blob-code blob-code-inner js-file-line"><span class="pl-c">            <span class="pl-s1"><span class="pl-c1">this</span>.<span class="pl-smi">params</span> <span class="pl-k">=</span> $routeParams;</span></span></td>
      </tr>
      <tr>
        <td id="L1083" class="blob-num js-line-number" data-line-number="1083"></td>
        <td id="LC1083" class="blob-code blob-code-inner js-file-line"><span class="pl-c">          <span class="pl-s1">}])</span></span></td>
      </tr>
      <tr>
        <td id="L1084" class="blob-num js-line-number" data-line-number="1084"></td>
        <td id="LC1084" class="blob-code blob-code-inner js-file-line"><span class="pl-c">          <span class="pl-s1">.<span class="pl-en">controller</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>ChapterCtrl<span class="pl-pds">&#39;</span></span>, [<span class="pl-s"><span class="pl-pds">&#39;</span>$routeParams<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span> <span class="pl-en">ChapterCtrl</span>(<span class="pl-smi">$routeParams</span>) {</span></span></td>
      </tr>
      <tr>
        <td id="L1085" class="blob-num js-line-number" data-line-number="1085"></td>
        <td id="LC1085" class="blob-code blob-code-inner js-file-line"><span class="pl-c">            <span class="pl-s1"><span class="pl-c1">this</span>.<span class="pl-c1">name</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>ChapterCtrl<span class="pl-pds">&#39;</span></span>;</span></span></td>
      </tr>
      <tr>
        <td id="L1086" class="blob-num js-line-number" data-line-number="1086"></td>
        <td id="LC1086" class="blob-code blob-code-inner js-file-line"><span class="pl-c">            <span class="pl-s1"><span class="pl-c1">this</span>.<span class="pl-smi">params</span> <span class="pl-k">=</span> $routeParams;</span></span></td>
      </tr>
      <tr>
        <td id="L1087" class="blob-num js-line-number" data-line-number="1087"></td>
        <td id="LC1087" class="blob-code blob-code-inner js-file-line"><span class="pl-c">          <span class="pl-s1">}]);</span></span></td>
      </tr>
      <tr>
        <td id="L1088" class="blob-num js-line-number" data-line-number="1088"></td>
        <td id="LC1088" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L1089" class="blob-num js-line-number" data-line-number="1089"></td>
        <td id="LC1089" class="blob-code blob-code-inner js-file-line"><span class="pl-c">      <span class="pl-s1"><span class="pl-k">&lt;</span><span class="pl-k">/</span>file<span class="pl-k">&gt;</span></span></span></td>
      </tr>
      <tr>
        <td id="L1090" class="blob-num js-line-number" data-line-number="1090"></td>
        <td id="LC1090" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L1091" class="blob-num js-line-number" data-line-number="1091"></td>
        <td id="LC1091" class="blob-code blob-code-inner js-file-line"><span class="pl-c">      <span class="pl-s1"><span class="pl-k">&lt;</span>file name<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>protractor.js<span class="pl-pds">&quot;</span></span> type<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>protractor<span class="pl-pds">&quot;</span></span><span class="pl-k">&gt;</span></span></span></td>
      </tr>
      <tr>
        <td id="L1092" class="blob-num js-line-number" data-line-number="1092"></td>
        <td id="LC1092" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        <span class="pl-s1"><span class="pl-en">it</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>should load and compile correct template<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span>() {</span></span></td>
      </tr>
      <tr>
        <td id="L1093" class="blob-num js-line-number" data-line-number="1093"></td>
        <td id="LC1093" class="blob-code blob-code-inner js-file-line"><span class="pl-c">          <span class="pl-s1"><span class="pl-en">element</span>(<span class="pl-smi">by</span>.<span class="pl-en">linkText</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Moby: Ch1<span class="pl-pds">&#39;</span></span>)).<span class="pl-c1">click</span>();</span></span></td>
      </tr>
      <tr>
        <td id="L1094" class="blob-num js-line-number" data-line-number="1094"></td>
        <td id="LC1094" class="blob-code blob-code-inner js-file-line"><span class="pl-c">          <span class="pl-s1"><span class="pl-k">var</span> content <span class="pl-k">=</span> <span class="pl-en">element</span>(<span class="pl-smi">by</span>.<span class="pl-en">css</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>[ng-view]<span class="pl-pds">&#39;</span></span>)).<span class="pl-en">getText</span>();</span></span></td>
      </tr>
      <tr>
        <td id="L1095" class="blob-num js-line-number" data-line-number="1095"></td>
        <td id="LC1095" class="blob-code blob-code-inner js-file-line"><span class="pl-c">          <span class="pl-s1"><span class="pl-en">expect</span>(content).<span class="pl-en">toMatch</span>(<span class="pl-sr"><span class="pl-pds">/</span>controller: ChapterCtrl<span class="pl-pds">/</span></span>);</span></span></td>
      </tr>
      <tr>
        <td id="L1096" class="blob-num js-line-number" data-line-number="1096"></td>
        <td id="LC1096" class="blob-code blob-code-inner js-file-line"><span class="pl-c">          <span class="pl-s1"><span class="pl-en">expect</span>(content).<span class="pl-en">toMatch</span>(<span class="pl-sr"><span class="pl-pds">/</span>Book Id: Moby<span class="pl-pds">/</span></span>);</span></span></td>
      </tr>
      <tr>
        <td id="L1097" class="blob-num js-line-number" data-line-number="1097"></td>
        <td id="LC1097" class="blob-code blob-code-inner js-file-line"><span class="pl-c">          <span class="pl-s1"><span class="pl-en">expect</span>(content).<span class="pl-en">toMatch</span>(<span class="pl-sr"><span class="pl-pds">/</span>Chapter Id: 1<span class="pl-pds">/</span></span>);</span></span></td>
      </tr>
      <tr>
        <td id="L1098" class="blob-num js-line-number" data-line-number="1098"></td>
        <td id="LC1098" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L1099" class="blob-num js-line-number" data-line-number="1099"></td>
        <td id="LC1099" class="blob-code blob-code-inner js-file-line"><span class="pl-c">          <span class="pl-s1"><span class="pl-en">element</span>(<span class="pl-smi">by</span>.<span class="pl-en">partialLinkText</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Scarlet<span class="pl-pds">&#39;</span></span>)).<span class="pl-c1">click</span>();</span></span></td>
      </tr>
      <tr>
        <td id="L1100" class="blob-num js-line-number" data-line-number="1100"></td>
        <td id="LC1100" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L1101" class="blob-num js-line-number" data-line-number="1101"></td>
        <td id="LC1101" class="blob-code blob-code-inner js-file-line"><span class="pl-c">          <span class="pl-s1">content <span class="pl-k">=</span> <span class="pl-en">element</span>(<span class="pl-smi">by</span>.<span class="pl-en">css</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>[ng-view]<span class="pl-pds">&#39;</span></span>)).<span class="pl-en">getText</span>();</span></span></td>
      </tr>
      <tr>
        <td id="L1102" class="blob-num js-line-number" data-line-number="1102"></td>
        <td id="LC1102" class="blob-code blob-code-inner js-file-line"><span class="pl-c">          <span class="pl-s1"><span class="pl-en">expect</span>(content).<span class="pl-en">toMatch</span>(<span class="pl-sr"><span class="pl-pds">/</span>controller: BookCtrl<span class="pl-pds">/</span></span>);</span></span></td>
      </tr>
      <tr>
        <td id="L1103" class="blob-num js-line-number" data-line-number="1103"></td>
        <td id="LC1103" class="blob-code blob-code-inner js-file-line"><span class="pl-c">          <span class="pl-s1"><span class="pl-en">expect</span>(content).<span class="pl-en">toMatch</span>(<span class="pl-sr"><span class="pl-pds">/</span>Book Id: Scarlet<span class="pl-pds">/</span></span>);</span></span></td>
      </tr>
      <tr>
        <td id="L1104" class="blob-num js-line-number" data-line-number="1104"></td>
        <td id="LC1104" class="blob-code blob-code-inner js-file-line"><span class="pl-c">        <span class="pl-s1">});</span></span></td>
      </tr>
      <tr>
        <td id="L1105" class="blob-num js-line-number" data-line-number="1105"></td>
        <td id="LC1105" class="blob-code blob-code-inner js-file-line"><span class="pl-c">      <span class="pl-s1"><span class="pl-k">&lt;</span><span class="pl-k">/</span>file<span class="pl-k">&gt;</span></span></span></td>
      </tr>
      <tr>
        <td id="L1106" class="blob-num js-line-number" data-line-number="1106"></td>
        <td id="LC1106" class="blob-code blob-code-inner js-file-line"><span class="pl-c">    <span class="pl-s1"><span class="pl-k">&lt;</span><span class="pl-k">/</span>example<span class="pl-k">&gt;</span></span></span></td>
      </tr>
      <tr>
        <td id="L1107" class="blob-num js-line-number" data-line-number="1107"></td>
        <td id="LC1107" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L1108" class="blob-num js-line-number" data-line-number="1108"></td>
        <td id="LC1108" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1109" class="blob-num js-line-number" data-line-number="1109"></td>
        <td id="LC1109" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1110" class="blob-num js-line-number" data-line-number="1110"></td>
        <td id="LC1110" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L1111" class="blob-num js-line-number" data-line-number="1111"></td>
        <td id="LC1111" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * @ngdoc event</span></td>
      </tr>
      <tr>
        <td id="L1112" class="blob-num js-line-number" data-line-number="1112"></td>
        <td id="LC1112" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-k">@name</span> <span class="pl-en">ngView#$viewContentLoaded</span></span></td>
      </tr>
      <tr>
        <td id="L1113" class="blob-num js-line-number" data-line-number="1113"></td>
        <td id="LC1113" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * @eventType emit on the current ngView scope</span></td>
      </tr>
      <tr>
        <td id="L1114" class="blob-num js-line-number" data-line-number="1114"></td>
        <td id="LC1114" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-k">@description</span></span></td>
      </tr>
      <tr>
        <td id="L1115" class="blob-num js-line-number" data-line-number="1115"></td>
        <td id="LC1115" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Emitted every time the ngView content is reloaded.</span></td>
      </tr>
      <tr>
        <td id="L1116" class="blob-num js-line-number" data-line-number="1116"></td>
        <td id="LC1116" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L1117" class="blob-num js-line-number" data-line-number="1117"></td>
        <td id="LC1117" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">ngViewFactory</span>.<span class="pl-smi">$inject</span> <span class="pl-k">=</span> [<span class="pl-s"><span class="pl-pds">&#39;</span>$route<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>$anchorScroll<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>$animate<span class="pl-pds">&#39;</span></span>];</td>
      </tr>
      <tr>
        <td id="L1118" class="blob-num js-line-number" data-line-number="1118"></td>
        <td id="LC1118" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">ngViewFactory</span>(<span class="pl-smi">$route</span>, <span class="pl-smi">$anchorScroll</span>, <span class="pl-smi">$animate</span>) {</td>
      </tr>
      <tr>
        <td id="L1119" class="blob-num js-line-number" data-line-number="1119"></td>
        <td id="LC1119" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">return</span> {</td>
      </tr>
      <tr>
        <td id="L1120" class="blob-num js-line-number" data-line-number="1120"></td>
        <td id="LC1120" class="blob-code blob-code-inner js-file-line">    restrict<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>ECA<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1121" class="blob-num js-line-number" data-line-number="1121"></td>
        <td id="LC1121" class="blob-code blob-code-inner js-file-line">    terminal<span class="pl-k">:</span> <span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L1122" class="blob-num js-line-number" data-line-number="1122"></td>
        <td id="LC1122" class="blob-code blob-code-inner js-file-line">    priority<span class="pl-k">:</span> <span class="pl-c1">400</span>,</td>
      </tr>
      <tr>
        <td id="L1123" class="blob-num js-line-number" data-line-number="1123"></td>
        <td id="LC1123" class="blob-code blob-code-inner js-file-line">    transclude<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>element<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1124" class="blob-num js-line-number" data-line-number="1124"></td>
        <td id="LC1124" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">link</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">scope</span>, <span class="pl-smi">$element</span>, <span class="pl-smi">attr</span>, <span class="pl-smi">ctrl</span>, <span class="pl-smi">$transclude</span>) {</td>
      </tr>
      <tr>
        <td id="L1125" class="blob-num js-line-number" data-line-number="1125"></td>
        <td id="LC1125" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> currentScope,</td>
      </tr>
      <tr>
        <td id="L1126" class="blob-num js-line-number" data-line-number="1126"></td>
        <td id="LC1126" class="blob-code blob-code-inner js-file-line">            currentElement,</td>
      </tr>
      <tr>
        <td id="L1127" class="blob-num js-line-number" data-line-number="1127"></td>
        <td id="LC1127" class="blob-code blob-code-inner js-file-line">            previousLeaveAnimation,</td>
      </tr>
      <tr>
        <td id="L1128" class="blob-num js-line-number" data-line-number="1128"></td>
        <td id="LC1128" class="blob-code blob-code-inner js-file-line">            autoScrollExp <span class="pl-k">=</span> <span class="pl-smi">attr</span>.<span class="pl-smi">autoscroll</span>,</td>
      </tr>
      <tr>
        <td id="L1129" class="blob-num js-line-number" data-line-number="1129"></td>
        <td id="LC1129" class="blob-code blob-code-inner js-file-line">            onloadExp <span class="pl-k">=</span> <span class="pl-smi">attr</span>.<span class="pl-smi">onload</span> <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1130" class="blob-num js-line-number" data-line-number="1130"></td>
        <td id="LC1130" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1131" class="blob-num js-line-number" data-line-number="1131"></td>
        <td id="LC1131" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">scope</span>.<span class="pl-en">$on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>$routeChangeSuccess<span class="pl-pds">&#39;</span></span>, update);</td>
      </tr>
      <tr>
        <td id="L1132" class="blob-num js-line-number" data-line-number="1132"></td>
        <td id="LC1132" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">update</span>();</td>
      </tr>
      <tr>
        <td id="L1133" class="blob-num js-line-number" data-line-number="1133"></td>
        <td id="LC1133" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1134" class="blob-num js-line-number" data-line-number="1134"></td>
        <td id="LC1134" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">function</span> <span class="pl-en">cleanupLastView</span>() {</td>
      </tr>
      <tr>
        <td id="L1135" class="blob-num js-line-number" data-line-number="1135"></td>
        <td id="LC1135" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span> (previousLeaveAnimation) {</td>
      </tr>
      <tr>
        <td id="L1136" class="blob-num js-line-number" data-line-number="1136"></td>
        <td id="LC1136" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">$animate</span>.<span class="pl-en">cancel</span>(previousLeaveAnimation);</td>
      </tr>
      <tr>
        <td id="L1137" class="blob-num js-line-number" data-line-number="1137"></td>
        <td id="LC1137" class="blob-code blob-code-inner js-file-line">            previousLeaveAnimation <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L1138" class="blob-num js-line-number" data-line-number="1138"></td>
        <td id="LC1138" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L1139" class="blob-num js-line-number" data-line-number="1139"></td>
        <td id="LC1139" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1140" class="blob-num js-line-number" data-line-number="1140"></td>
        <td id="LC1140" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span> (currentScope) {</td>
      </tr>
      <tr>
        <td id="L1141" class="blob-num js-line-number" data-line-number="1141"></td>
        <td id="LC1141" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">currentScope</span>.<span class="pl-en">$destroy</span>();</td>
      </tr>
      <tr>
        <td id="L1142" class="blob-num js-line-number" data-line-number="1142"></td>
        <td id="LC1142" class="blob-code blob-code-inner js-file-line">            currentScope <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L1143" class="blob-num js-line-number" data-line-number="1143"></td>
        <td id="LC1143" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L1144" class="blob-num js-line-number" data-line-number="1144"></td>
        <td id="LC1144" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span> (currentElement) {</td>
      </tr>
      <tr>
        <td id="L1145" class="blob-num js-line-number" data-line-number="1145"></td>
        <td id="LC1145" class="blob-code blob-code-inner js-file-line">            previousLeaveAnimation <span class="pl-k">=</span> <span class="pl-smi">$animate</span>.<span class="pl-en">leave</span>(currentElement);</td>
      </tr>
      <tr>
        <td id="L1146" class="blob-num js-line-number" data-line-number="1146"></td>
        <td id="LC1146" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">previousLeaveAnimation</span>.<span class="pl-en">done</span>(<span class="pl-k">function</span>(<span class="pl-smi">response</span>) {</td>
      </tr>
      <tr>
        <td id="L1147" class="blob-num js-line-number" data-line-number="1147"></td>
        <td id="LC1147" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">if</span> (response <span class="pl-k">!==</span> <span class="pl-c1">false</span>) previousLeaveAnimation <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L1148" class="blob-num js-line-number" data-line-number="1148"></td>
        <td id="LC1148" class="blob-code blob-code-inner js-file-line">            });</td>
      </tr>
      <tr>
        <td id="L1149" class="blob-num js-line-number" data-line-number="1149"></td>
        <td id="LC1149" class="blob-code blob-code-inner js-file-line">            currentElement <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L1150" class="blob-num js-line-number" data-line-number="1150"></td>
        <td id="LC1150" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L1151" class="blob-num js-line-number" data-line-number="1151"></td>
        <td id="LC1151" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1152" class="blob-num js-line-number" data-line-number="1152"></td>
        <td id="LC1152" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1153" class="blob-num js-line-number" data-line-number="1153"></td>
        <td id="LC1153" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">function</span> <span class="pl-en">update</span>() {</td>
      </tr>
      <tr>
        <td id="L1154" class="blob-num js-line-number" data-line-number="1154"></td>
        <td id="LC1154" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> locals <span class="pl-k">=</span> <span class="pl-smi">$route</span>.<span class="pl-c1">current</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">$route</span>.<span class="pl-c1">current</span>.<span class="pl-smi">locals</span>,</td>
      </tr>
      <tr>
        <td id="L1155" class="blob-num js-line-number" data-line-number="1155"></td>
        <td id="LC1155" class="blob-code blob-code-inner js-file-line">              template <span class="pl-k">=</span> locals <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">locals</span>.<span class="pl-smi">$template</span>;</td>
      </tr>
      <tr>
        <td id="L1156" class="blob-num js-line-number" data-line-number="1156"></td>
        <td id="LC1156" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1157" class="blob-num js-line-number" data-line-number="1157"></td>
        <td id="LC1157" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span> (<span class="pl-smi">angular</span>.<span class="pl-en">isDefined</span>(template)) {</td>
      </tr>
      <tr>
        <td id="L1158" class="blob-num js-line-number" data-line-number="1158"></td>
        <td id="LC1158" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> newScope <span class="pl-k">=</span> <span class="pl-smi">scope</span>.<span class="pl-en">$new</span>();</td>
      </tr>
      <tr>
        <td id="L1159" class="blob-num js-line-number" data-line-number="1159"></td>
        <td id="LC1159" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> current <span class="pl-k">=</span> <span class="pl-smi">$route</span>.<span class="pl-c1">current</span>;</td>
      </tr>
      <tr>
        <td id="L1160" class="blob-num js-line-number" data-line-number="1160"></td>
        <td id="LC1160" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1161" class="blob-num js-line-number" data-line-number="1161"></td>
        <td id="LC1161" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> Note: This will also link all children of ng-view that were contained in the original</span></td>
      </tr>
      <tr>
        <td id="L1162" class="blob-num js-line-number" data-line-number="1162"></td>
        <td id="LC1162" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> html. If that content contains controllers, ... they could pollute/change the scope.</span></td>
      </tr>
      <tr>
        <td id="L1163" class="blob-num js-line-number" data-line-number="1163"></td>
        <td id="LC1163" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> However, using ng-view on an element with additional content does not make sense...</span></td>
      </tr>
      <tr>
        <td id="L1164" class="blob-num js-line-number" data-line-number="1164"></td>
        <td id="LC1164" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> Note: We can&#39;t remove them in the cloneAttchFn of $transclude as that</span></td>
      </tr>
      <tr>
        <td id="L1165" class="blob-num js-line-number" data-line-number="1165"></td>
        <td id="LC1165" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> function is called before linking the content, which would apply child</span></td>
      </tr>
      <tr>
        <td id="L1166" class="blob-num js-line-number" data-line-number="1166"></td>
        <td id="LC1166" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> directives to non existing elements.</span></td>
      </tr>
      <tr>
        <td id="L1167" class="blob-num js-line-number" data-line-number="1167"></td>
        <td id="LC1167" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> clone <span class="pl-k">=</span> <span class="pl-en">$transclude</span>(newScope, <span class="pl-k">function</span>(<span class="pl-smi">clone</span>) {</td>
      </tr>
      <tr>
        <td id="L1168" class="blob-num js-line-number" data-line-number="1168"></td>
        <td id="LC1168" class="blob-code blob-code-inner js-file-line">              <span class="pl-smi">$animate</span>.<span class="pl-en">enter</span>(clone, <span class="pl-c1">null</span>, currentElement <span class="pl-k">||</span> $element).<span class="pl-en">done</span>(<span class="pl-k">function</span> <span class="pl-en">onNgViewEnter</span>(<span class="pl-smi">response</span>) {</td>
      </tr>
      <tr>
        <td id="L1169" class="blob-num js-line-number" data-line-number="1169"></td>
        <td id="LC1169" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (response <span class="pl-k">!==</span> <span class="pl-c1">false</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">angular</span>.<span class="pl-en">isDefined</span>(autoScrollExp)</td>
      </tr>
      <tr>
        <td id="L1170" class="blob-num js-line-number" data-line-number="1170"></td>
        <td id="LC1170" class="blob-code blob-code-inner js-file-line">                  <span class="pl-k">&amp;&amp;</span> (<span class="pl-k">!</span>autoScrollExp <span class="pl-k">||</span> <span class="pl-smi">scope</span>.<span class="pl-en">$eval</span>(autoScrollExp))) {</td>
      </tr>
      <tr>
        <td id="L1171" class="blob-num js-line-number" data-line-number="1171"></td>
        <td id="LC1171" class="blob-code blob-code-inner js-file-line">                  <span class="pl-en">$anchorScroll</span>();</td>
      </tr>
      <tr>
        <td id="L1172" class="blob-num js-line-number" data-line-number="1172"></td>
        <td id="LC1172" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L1173" class="blob-num js-line-number" data-line-number="1173"></td>
        <td id="LC1173" class="blob-code blob-code-inner js-file-line">              });</td>
      </tr>
      <tr>
        <td id="L1174" class="blob-num js-line-number" data-line-number="1174"></td>
        <td id="LC1174" class="blob-code blob-code-inner js-file-line">              <span class="pl-en">cleanupLastView</span>();</td>
      </tr>
      <tr>
        <td id="L1175" class="blob-num js-line-number" data-line-number="1175"></td>
        <td id="LC1175" class="blob-code blob-code-inner js-file-line">            });</td>
      </tr>
      <tr>
        <td id="L1176" class="blob-num js-line-number" data-line-number="1176"></td>
        <td id="LC1176" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1177" class="blob-num js-line-number" data-line-number="1177"></td>
        <td id="LC1177" class="blob-code blob-code-inner js-file-line">            currentElement <span class="pl-k">=</span> clone;</td>
      </tr>
      <tr>
        <td id="L1178" class="blob-num js-line-number" data-line-number="1178"></td>
        <td id="LC1178" class="blob-code blob-code-inner js-file-line">            currentScope <span class="pl-k">=</span> <span class="pl-smi">current</span>.<span class="pl-c1">scope</span> <span class="pl-k">=</span> newScope;</td>
      </tr>
      <tr>
        <td id="L1179" class="blob-num js-line-number" data-line-number="1179"></td>
        <td id="LC1179" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">currentScope</span>.<span class="pl-en">$emit</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>$viewContentLoaded<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1180" class="blob-num js-line-number" data-line-number="1180"></td>
        <td id="LC1180" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">currentScope</span>.<span class="pl-en">$eval</span>(onloadExp);</td>
      </tr>
      <tr>
        <td id="L1181" class="blob-num js-line-number" data-line-number="1181"></td>
        <td id="LC1181" class="blob-code blob-code-inner js-file-line">          } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1182" class="blob-num js-line-number" data-line-number="1182"></td>
        <td id="LC1182" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">cleanupLastView</span>();</td>
      </tr>
      <tr>
        <td id="L1183" class="blob-num js-line-number" data-line-number="1183"></td>
        <td id="LC1183" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L1184" class="blob-num js-line-number" data-line-number="1184"></td>
        <td id="LC1184" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1185" class="blob-num js-line-number" data-line-number="1185"></td>
        <td id="LC1185" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1186" class="blob-num js-line-number" data-line-number="1186"></td>
        <td id="LC1186" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1187" class="blob-num js-line-number" data-line-number="1187"></td>
        <td id="LC1187" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L1188" class="blob-num js-line-number" data-line-number="1188"></td>
        <td id="LC1188" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1189" class="blob-num js-line-number" data-line-number="1189"></td>
        <td id="LC1189" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> This directive is called during the $transclude call of the first `ngView` directive.</span></td>
      </tr>
      <tr>
        <td id="L1190" class="blob-num js-line-number" data-line-number="1190"></td>
        <td id="LC1190" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> It will replace and compile the content of the element with the loaded template.</span></td>
      </tr>
      <tr>
        <td id="L1191" class="blob-num js-line-number" data-line-number="1191"></td>
        <td id="LC1191" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> We need this directive so that the element content is already filled when</span></td>
      </tr>
      <tr>
        <td id="L1192" class="blob-num js-line-number" data-line-number="1192"></td>
        <td id="LC1192" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> the link function of another directive on the same element as ngView</span></td>
      </tr>
      <tr>
        <td id="L1193" class="blob-num js-line-number" data-line-number="1193"></td>
        <td id="LC1193" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> is called.</span></td>
      </tr>
      <tr>
        <td id="L1194" class="blob-num js-line-number" data-line-number="1194"></td>
        <td id="LC1194" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">ngViewFillContentFactory</span>.<span class="pl-smi">$inject</span> <span class="pl-k">=</span> [<span class="pl-s"><span class="pl-pds">&#39;</span>$compile<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>$controller<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>$route<span class="pl-pds">&#39;</span></span>];</td>
      </tr>
      <tr>
        <td id="L1195" class="blob-num js-line-number" data-line-number="1195"></td>
        <td id="LC1195" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">ngViewFillContentFactory</span>(<span class="pl-smi">$compile</span>, <span class="pl-smi">$controller</span>, <span class="pl-smi">$route</span>) {</td>
      </tr>
      <tr>
        <td id="L1196" class="blob-num js-line-number" data-line-number="1196"></td>
        <td id="LC1196" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">return</span> {</td>
      </tr>
      <tr>
        <td id="L1197" class="blob-num js-line-number" data-line-number="1197"></td>
        <td id="LC1197" class="blob-code blob-code-inner js-file-line">    restrict<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>ECA<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1198" class="blob-num js-line-number" data-line-number="1198"></td>
        <td id="LC1198" class="blob-code blob-code-inner js-file-line">    priority<span class="pl-k">:</span> <span class="pl-k">-</span><span class="pl-c1">400</span>,</td>
      </tr>
      <tr>
        <td id="L1199" class="blob-num js-line-number" data-line-number="1199"></td>
        <td id="LC1199" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">link</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">scope</span>, <span class="pl-smi">$element</span>) {</td>
      </tr>
      <tr>
        <td id="L1200" class="blob-num js-line-number" data-line-number="1200"></td>
        <td id="LC1200" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> current <span class="pl-k">=</span> <span class="pl-smi">$route</span>.<span class="pl-c1">current</span>,</td>
      </tr>
      <tr>
        <td id="L1201" class="blob-num js-line-number" data-line-number="1201"></td>
        <td id="LC1201" class="blob-code blob-code-inner js-file-line">          locals <span class="pl-k">=</span> <span class="pl-smi">current</span>.<span class="pl-smi">locals</span>;</td>
      </tr>
      <tr>
        <td id="L1202" class="blob-num js-line-number" data-line-number="1202"></td>
        <td id="LC1202" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1203" class="blob-num js-line-number" data-line-number="1203"></td>
        <td id="LC1203" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">$element</span>.<span class="pl-en">html</span>(<span class="pl-smi">locals</span>.<span class="pl-smi">$template</span>);</td>
      </tr>
      <tr>
        <td id="L1204" class="blob-num js-line-number" data-line-number="1204"></td>
        <td id="LC1204" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1205" class="blob-num js-line-number" data-line-number="1205"></td>
        <td id="LC1205" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> link <span class="pl-k">=</span> <span class="pl-en">$compile</span>(<span class="pl-smi">$element</span>.<span class="pl-en">contents</span>());</td>
      </tr>
      <tr>
        <td id="L1206" class="blob-num js-line-number" data-line-number="1206"></td>
        <td id="LC1206" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1207" class="blob-num js-line-number" data-line-number="1207"></td>
        <td id="LC1207" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-smi">current</span>.<span class="pl-smi">controller</span>) {</td>
      </tr>
      <tr>
        <td id="L1208" class="blob-num js-line-number" data-line-number="1208"></td>
        <td id="LC1208" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">locals</span>.<span class="pl-smi">$scope</span> <span class="pl-k">=</span> scope;</td>
      </tr>
      <tr>
        <td id="L1209" class="blob-num js-line-number" data-line-number="1209"></td>
        <td id="LC1209" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> controller <span class="pl-k">=</span> <span class="pl-en">$controller</span>(<span class="pl-smi">current</span>.<span class="pl-smi">controller</span>, locals);</td>
      </tr>
      <tr>
        <td id="L1210" class="blob-num js-line-number" data-line-number="1210"></td>
        <td id="LC1210" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-smi">current</span>.<span class="pl-smi">controllerAs</span>) {</td>
      </tr>
      <tr>
        <td id="L1211" class="blob-num js-line-number" data-line-number="1211"></td>
        <td id="LC1211" class="blob-code blob-code-inner js-file-line">          scope[<span class="pl-smi">current</span>.<span class="pl-smi">controllerAs</span>] <span class="pl-k">=</span> controller;</td>
      </tr>
      <tr>
        <td id="L1212" class="blob-num js-line-number" data-line-number="1212"></td>
        <td id="LC1212" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L1213" class="blob-num js-line-number" data-line-number="1213"></td>
        <td id="LC1213" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">$element</span>.<span class="pl-c1">data</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>$ngControllerController<span class="pl-pds">&#39;</span></span>, controller);</td>
      </tr>
      <tr>
        <td id="L1214" class="blob-num js-line-number" data-line-number="1214"></td>
        <td id="LC1214" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">$element</span>.<span class="pl-en">children</span>().<span class="pl-c1">data</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>$ngControllerController<span class="pl-pds">&#39;</span></span>, controller);</td>
      </tr>
      <tr>
        <td id="L1215" class="blob-num js-line-number" data-line-number="1215"></td>
        <td id="LC1215" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1216" class="blob-num js-line-number" data-line-number="1216"></td>
        <td id="LC1216" class="blob-code blob-code-inner js-file-line">      scope[<span class="pl-smi">current</span>.<span class="pl-smi">resolveAs</span> <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&#39;</span>$resolve<span class="pl-pds">&#39;</span></span>] <span class="pl-k">=</span> locals;</td>
      </tr>
      <tr>
        <td id="L1217" class="blob-num js-line-number" data-line-number="1217"></td>
        <td id="LC1217" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1218" class="blob-num js-line-number" data-line-number="1218"></td>
        <td id="LC1218" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">link</span>(scope);</td>
      </tr>
      <tr>
        <td id="L1219" class="blob-num js-line-number" data-line-number="1219"></td>
        <td id="LC1219" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1220" class="blob-num js-line-number" data-line-number="1220"></td>
        <td id="LC1220" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1221" class="blob-num js-line-number" data-line-number="1221"></td>
        <td id="LC1221" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L1222" class="blob-num js-line-number" data-line-number="1222"></td>
        <td id="LC1222" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1223" class="blob-num js-line-number" data-line-number="1223"></td>
        <td id="LC1223" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1224" class="blob-num js-line-number" data-line-number="1224"></td>
        <td id="LC1224" class="blob-code blob-code-inner js-file-line">})(<span class="pl-c1">window</span>, <span class="pl-c1">window</span>.<span class="pl-smi">angular</span>);</td>
      </tr>
</table>

  <div class="BlobToolbar position-absolute js-file-line-actions dropdown js-menu-container js-select-menu d-none" aria-hidden="true">
    <button class="btn-octicon ml-0 px-2 p-0 bg-white border border-gray-dark rounded-1 dropdown-toggle js-menu-target" id="js-file-line-action-button" type="button" aria-expanded="false" aria-haspopup="true" aria-label="Inline file action toolbar" aria-controls="inline-file-actions">
      <svg aria-hidden="true" class="octicon octicon-kebab-horizontal" height="16" version="1.1" viewBox="0 0 13 16" width="13"><path fill-rule="evenodd" d="M1.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/></svg>
    </button>
    <div class="dropdown-menu-content js-menu-content" id="inline-file-actions">
      <ul class="BlobToolbar-dropdown dropdown-menu dropdown-menu-se mt-2">
        <li><a class="js-zeroclipboard dropdown-item" style="cursor:pointer;" id="js-copy-lines" data-original-text="Copy lines">Copy lines</a></li>
        <li><a class="js-zeroclipboard dropdown-item" id= "js-copy-permalink" style="cursor:pointer;" data-original-text="Copy permalink">Copy permalink</a></li>
        <li><a href="/angular/bower-angular-route/blame/afc89a6d2406435851ed1402eddba1ea2c86f57a/angular-route.js" class="dropdown-item js-update-url-with-hash" id="js-view-git-blame">View git blame</a></li>
      </ul>
    </div>
  </div>

  </div>

  </div>

  <button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="d-none">Jump to Line</button>
  <div id="jump-to-line" style="display:none">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
      <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
      <button type="submit" class="btn">Go</button>
</form>  </div>


  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>

    </div>
  </div>

  </div>

      
<div class="footer container-lg px-3" role="contentinfo">
  <div class="position-relative d-flex flex-justify-between py-6 mt-6 f6 text-gray border-top border-gray-light ">
    <ul class="list-style-none d-flex flex-wrap ">
      <li class="mr-3">&copy; 2017 <span title="0.19389s from unicorn-3391298341-jg6j0">GitHub</span>, Inc.</li>
        <li class="mr-3"><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li class="mr-3"><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li class="mr-3"><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li class="mr-3"><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>

    <a href="https://github.com" aria-label="Homepage" class="footer-octicon" title="GitHub">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
    <ul class="list-style-none d-flex flex-wrap ">
        <li class="mr-3"><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact GitHub</a></li>
      <li class="mr-3"><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li class="mr-3"><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li class="mr-3"><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li class="mr-3"><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>
  </div>
</div>



  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
    You can't perform that action at this time.
  </div>


    
    <script crossorigin="anonymous" integrity="sha256-OQfZqtgSuMlBR8iBZctKlpPFfPmfDo4BBT/Hneep2RE=" src="https://assets-cdn.github.com/assets/frameworks-3907d9aad812b8c94147c88165cb4a9693c57cf99f0e8e01053fc79de7a9d911.js"></script>
    
    <script async="async" crossorigin="anonymous" integrity="sha256-wbENoh8ZMqQXP8+2BnbirTLlFfeud1Y922WPBM0mNo0=" src="https://assets-cdn.github.com/assets/github-c1b10da21f1932a4173fcfb60676e2ad32e515f7ae77563ddb658f04cd26368d.js"></script>
    
    
    
    
  <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
  </div>
</div>


  </body>
</html>

