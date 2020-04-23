<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <meta name="description" content="Jonnovative is a website built by Jonathan Hammond. It's purpose is to display his portfolio, making him presentable to employers and clients.">
    <!-- <link href="https://fonts.googleapis.com/css?family=Roboto:300i,400,700&display=swap" rel="stylesheet"> -->
    <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;1,700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!-- <link rel="stylesheet" href="styles.css"> -->
    <link rel="stylesheet" href="portfolio/bestNav.css">
    <link rel="stylesheet" href="portfolio/footerIcons.css">
    <title>Home Page</title>
  </head>
  <body>
    <!-- What does cz-shortcut-listen do? It doesn't seem necessary for a11y -->
    <header>
      <div class="ceiling-strip"></div>

      <!-- TOP MENU START -->
      <nav class="navbar">
        <!-- HAMBURGER ICON START -->
        <span class="open-slide">
          <a href="#" onclick="openSlideMenu()" class="heaven-icon">
            &#9776;
          </a>
        </span>
        <!-- HAMBURGER ICON END -->

        <!-- TOP MENU LINKS START  -->
        <ul class="navbar-nav">
          <li class="logo-left"><a class="logo logo-center" href="index.html">Jonnovative</a></li>
          <!-- <li><a class="hidden-links" href="..\portfolio\portfolio.html">Portfolio</a></li>
          <li><a class="hidden-links" href="..\about.html">About Me</a></li>
          <li><a class="hidden-links" href="..\contact.html">Contact</a></li> -->

          <!-- Each of these sets need to be combined -->
          <!-- Classes = hidden-links (all), md-x (icons), x-link (anchors) -->
          <li class="hidden-links folder-link">
            <a href="portfolio.html"><i class="material-icons md-18 md-folder">folder</i></a>
            <a class="link-leveler" href="portfolio/portfolio.html">Portfolio</a>
          </li>

          <li class="hidden-links person-link">
            <a href="about.html"><i class="material-icons md-18 md-person">person</i></a>
            <a class="link-leveler" href="about.html">About</a>
          </li>

          <li class="hidden-links contact-link">
            <a href="contact.html"><i class="material-icons md-18 md-call">call</i></a>
            <a class="link-leveler" href="contact.html">Contact</a>
          </li>

          <!-- <li class="hidden-links md-folder"><a href="portfolio.html"><i class="material-icons md-18">folder</i></a> </li>
          <li class="hidden-links portfolio-link"><a href="portfolio.html">Portfolio</a></li>

          <li class="hidden-links md-person"><a href="../about.html"><i class="material-icons md-18">person</i></a> </li>
          <li class="hidden-links about-link"><a href="../about.html">About</a></li>

          <li class="hidden-links md-call"><a href="../contact.html"><i class="material-icons md-18">call</i></a> </li>
          <li class="hidden-links contact-link"><a href="../contact.html">Contact</a></li> -->
          <!-- List combo sets end -->
        </ul>
        <span class="open-slide">
          <a class="heaven-icon-clear">
            &#9776;
          </a>
        </span>
      </nav>
    </header>

        <!-- TOP MENU LINKS END -->
    <!-- TOP MENU END -->

    <!-- SIDE MENU START -->
    <div id="side-menu" class="side-nav">

      <!-- EXIT ICON START -->
      <a href="#" class="btn-close exit-icon" onclick="closeSlideMenu()">&times;</a>
      <!-- EXIT ICON END -->

      <!-- SIDE MENU LINKS START -->
      <a href="index.html">Home</a>
      <a href="portfolio\portfolio.html">Portfolio</a>
      <a href="about.html">About</a>
      <a href="blog\blog.html">Blog</a>
      <a href="contact.html">Contact</a>
    </div>
    <!-- SIDE MENU LINKS END -->
    <!-- SIDE MENU END -->


    <!-- <div class="container"> -->
    <div class="mt container">
      <h1>Welcome to My Website!</h1>
      <!-- https://dequeuniversity.com/screenreaders/nvda-keyboard-shortcuts#nvda-nvda_shortcut_keys
          This website explains the button commands for navigating a screen reader-->
    </div>
    <main class="container">
      <section>
        <h2>Dream: Front End Developer</h2>
        <p>Hi! My name is Jonathan Hammond. I am teaching myself how to code. I am decent with HTML, okay with CSS, and am expanding those skills through this portfolio website. </p>
        <p>My goal is to become hireable for junior front end developer positions. If you are a recruiter or employer, please <a href="contact.html">contact</a> me. I’d love to interview immediately.</p>
      </section>
      <section>
        <h2>I can Design Your Website</h2>
        <p>Please visit my portfolio page to see the work that I’ve done. So far, I’ve designed <a href="http://www.loislaneins.com" target="_blank">only one website</a>, one my client insisted they leave a referral for! I aspire to be a developer, but am currently open to designing websites. It's much easier to use platforms such as SquareSpace and Yola than it is to code one from scratch. Please note for reference, I have coded this website from start to finish.</p>
        <p>You can be a small business or an individual seeking a personal website. If you want a website built, then feel free to <a href="contact.html">reach out to me</a> today!</p>
      </section>
    </main>
    <section class="center-btns container">

      <div><a href="portfolio/portfolio.html">View Portfolio</a></div>
      <div><a href="contact.html">Contact</a></div>

      <!--a     border-color: #3f4eae;
          color: #fff;-->

      <!-- div      -> a -> the div has margin-top: .8rem, the margin-left: .8rem  -->

      <!-- a     background: linear-gradient(180deg,#6371c7,#5563c1); -->

      <!--  a       box-shadow: inset 0 1px 0 0 #6774c8, 0 1px 0 0 rgba(22,29,37,.05), 0 0 0 0 transparent; -->
      <!-- <p><a href="portfolio/portfolio.html">View Portfolio</a></p>
      <p><a href="contact.html">Contact</a></p> -->



    </section>
    <br>
    <!-- <section>
      <header>
        <h3 align="left">Here's a Song!</h3>
      </header>
      <div class="home-page-video">
        <iframe width="435" height="328" src="https://www.youtube.com/embed/Nu8jpESs5Bk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </section>
    <br>
    <br> -->



    <!-- Florin Pop JavaScript quote START  -->

    <!-- <blockquote class="twitter-tweet"><p lang="en" dir="ltr">In your opinion, what are the things a developer needs to know how to do in order to get a job as a JavaScript developer?</p>&mdash; Florin Pop 👨🏻‍💻 (@florinpop1705) <a href="https://twitter.com/florinpop1705/status/1246820844925583360?ref_src=twsrc%5Etfw">April 5, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> -->

    <!-- Florin Pop JavaScript quote END  -->


    <!-- HOW DO I PIN THIS TO THE BOTTOM ON EVERY PAGE? -->
    <footer class="mb sticky">
      <!-- <div class="flaticon-attr small-center x-ms">Icons made by <a href="https://www.flaticon.com/authors/phatplus" title="phatplus">phatplus</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
      </div> -->

      <div class="container">
        <p class="social-icons-flex">
          <a href="https://twitter.com/jonamichahammo" target="_blank"><img src="images/twitter.svg" alt="Twitter Icon, courtesy of Font Awesome" height="40em"></a>
          <a href="https://www.linkedin.com/in/jonamichahammo/" target="_blank"><img src="images/linkedin.svg" alt="LinkedIn Icon, courtesy of Font Awesome" height="40em"></a>
          <a href="https://github.com/Pythonidaer" target="_blank"><img src="images/github.svg" alt="Github Icon, courtesy of Font Awesome" height="40em"></a>
          <a href="mailto:codefolio.work@gmail.com?" subject="subject text"><img src="images/email.svg" alt="Github Icon, courtesy of Font Awesome" height="40em"></a>
        </p>
      </div>

      <p class="fp-center"><a href="sitemap.html">Sitemap</a> | <a href="privacy.html">Privacy Policy</a> | <a href="termsconditions.html">Terms & Conditions</a></p>
      <small>&copy; Copyright <script>new Date().getFullYear()>2010&&document.write(new Date().getFullYear());</script> Jonnovative Designs</small>
     </footer>
  </body>
  <script src="js/myBurger.js"></script>
</html>

    <!--
      THE BELOW CODE ADDS A COOL TWITTER AND FACEBOOK ICON BUT THE SITE NEEDS TO BE LIVE
      POST INLINE
      <!-- Go to www.addthis.com/dashboard to customize your tools
            <div class="addthis_inline_follow_toolbox">:)</div>
      POST BEFORE </body>
      <!-- Go to www.addthis.com/dashboard to customize your tools
  <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5e0b9628bd3f2bc4"></script>

      <div> -> little semantic value; perfect for wrapping
      <article> -> reps a complete composition in a document page, application or site that is independently distributable or reusable "in syndication"; can be a blog post or blog comments; magazine article
      <aside> -> equivalent to a sidebar related to main article but could not stand alone

                                  -->
