<?php

session_start();
if (isset($_SESSION['status'])) {
    echo '<p class="success">' . $_SESSION['status'] . "</p>";
    unset($_SESSION['status']);
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Étudiant en informatique">
    <meta name="googlebot-news" content="nofollow">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Jérémie Bayon - Portfolio</title>
    <link rel="icon" href="content/images/logo.gif" type="icon"/>
    <link rel="stylesheet" href="style/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <script defer src="style/script.js"></script>
    <script defer src="https://unpkg.com/typed.js@2.0.14/dist/typed.umd.js"></script>
</head>
<body onload="loop()">
    <video autoplay muted loop>
        <source src="content/images/video.mp4" type="video/mp4"/>
    </video>
    <header>
        <a href="#home"><img src="content/images/logo.gif" alt="logo"></a>
        <div class="laptop-navigation laptop-navigation-hidden">
            <nav>
                <ul>
                    <li><a class="active" href="#about">À propos</a></li>
                    <li><a class="active" href="#projects">Projets</a></li>
                    <li><a class="active" href="#skills">Compétences</a></li>
                    <li><a class="active" href="#technology-watch">Veille</a></li>
                    <li><a class="active" href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
        <div class="mobile-navigation mobile-navigation-hidden">  
            <nav>
                <button class="hamburger" onclick="showMobileNavigation()">
                    <div id="bar1" class="bar"></div>
                    <div id="bar2" class="bar"></div>
                    <div id="bar3" class="bar"></div>
                </button>
                <ul>
                    <li><a href="#about">À propos</a></li>
                    <li><a href="#projects">Projets</a></li>
                    <li><a href="#skills">Compétences</a></li>
                    <li><a href="#technology-watch">Veille</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
    <main>
        <section class="home" id="home">
            <div class="home-title">
                <h1>Bienvenue</h1>
                <div class="loop">
                    <p>Je <span id="element"></span></p>
                </div>
            </div>
        </section>
        <section id="about" class="about">
            <div class="about-box hidden-x">
                <div class="scrollable-div-content hidden-x">
                    <div class="about-title">
                        <h2>À propos de moi</h2>
                    </div>
                    <div class="about-info">
                        <div class="about-picture">
                            <img src="content/images/picture-2.jpg" alt="picture-1">
                        </div>
                        <div class="about-resume">
                            <p>
                                Actuellement <span>étudiant en informatique</span> à <span>Maestris BTS</span> (Campus Sciences U Lyon), je prépare un <span>Brevet de Technicien Supérieur - Services Informatiques aux Organisations</span> (Option Solutions Logicielles et Applications Métiers) depuis septembre 2022. Durant cette formation, j'ai eu l'opportuntié de réaliser un stage en développement web chez <span>Kozea Group</span>, en tant que développeur back-end, pour un projet de chatbot. 
                                <br>
                                <br> 
                                J'ai également étudié les langues étrangères en préparant une <span>Licence Langues Étrangères</span> (Anglais et Russe) à l'<span>Université Jean Moulin - Lyon 3</span> pendant quatre ans, obtenue en juin 2022.
                                <br>
                                <br>
                                Après le BTS, j'envisage de continuer mes études en intégrant un <span>Bachelor</span> puis un <span>Mastère</span> en <span>Ingénierie du Web</span> à l'<span>ESGI</span>, dans le cadre de mon projet d'avenir en tant que <span>développeur web et mobile</span>. J'envisage aussi de préparer un double diplôme durant ma dernière année de Mastère en partant étudier à l'étranger de façon à élargir les opportunités professionnelles.
                                <br>
                                <br>
                                Pour en savoir plus, n'hésitez pas à consulter mon <a href="content/files/curriculum-vitae-fr.pdf"><span>CV</span></a>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="projects" id="projects">
            <h2 class="projects-title hidden-y">Mes projets</h2>
            <div class="wrapper">
                <div class="carousel">
                    <div class="card">
                        <div class="info" draggable="false">
                            <h2>TARS</h2>
                            <p>Conception d'un chatbot pour l'entreprise Kozea Group.<br><br>Stage - 1re année</p>
                            <button>En savoir plus</button>
                        </div>
                    </div>
                    <div class="card">
                        <div class="info" draggable="false">
                            <h2>Indispo.</h2>
                            <p>Indisponible pour le moment. Veuillez revenir plus tard.<br><br>Stage - 2e année</p>
                            <button>En savoir plus</button>
                        </div>
                    </div>
                    <div class="card">
                        <div class="info" draggable="false">
                            <h2>GSB</h2>
                            <p>Conception d'une appli. web et mobile pour l'entreprise fictive GSB.<br><br>2e année</p>
                            <button>En savoir plus</button>
                        </div>
                    </div>
                    <div class="card">
                        <div class="info" draggable="false">
                            <h2>DOPAMINE</h2>
                            <p>Conception d'un site web no code pour l'entreprise fictive Dopamine.<br><br>
                            Workshop - 2e année</p>
                            <button>En savoir plus</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="skills" id="skills">
            <div class="skills-title">
                <h2>Mes compétences</h2>
            </div>
            <div class="skills-box">
                <div class="scroller hidden-y" data-direction="left" data-speed="fast">
                    <ul class="tag-list scroller__inner">
                        <li>Bootstrap</li>
                        <li>CSS</li>
                        <li>Flask</li>
                        <li>HTML</li>
                        <li>JS</li>
                        <li>React</li>
                    </ul>
                </div>
                <div class="scroller hidden-y" data-direction="right" data-speed="fast">
                    <ul class="tag-list scroller__inner">
                        <li>Langchain</li>
                        <li>Llama Index</li>
                        <li>Java</li>
                        <li>MySQL</li>
                        <li>PHP</li>
                        <li>Python</li>
                    </ul>
                </div>
                <div class="scroller hidden-y" data-direction="left" data-speed="fast">
                    <ul class="tag-list scroller__inner">
                        <li>Git</li>
                        <li>GitHub</li>
                        <li>GitLab</li>
                        <li>MacOs</li>
                        <li>Linux</li>
                        <li>Windows</li>
                    </ul>
                </div>
                <div class="scroller hidden-y" data-direction="right" data-speed="fast">
                    <ul class="tag-list scroller__inner">
                        <li>Anglais</li>
                        <li>Russe</li>
                        <li>Langue des Signes Française</li>
                    </ul>
                </div>
            </div>
            <button><a href="content/files/tableau-de-synthese.pdf">Voir le tableau de synthèse</a></button>
        </section>
        <section class="technology-watch" id="technology-watch">
            <div class="technology-watch-box hidden-x">
                <div class="scrollable-div-content hidden-x">
                    <div class="technology-watch-title">
                        <h2>Veille</h2>
                    </div>
                    <div class="technology-watch-resume">
                        <p>
                            <div class="title-article">IA vs. Développeurs : la fin ?</div><br>
                            Depuis quelque temps, maintenant, l'intelligence artificielle ou « IA », présentée comme le futur de la technologie, attire les regards de plus en plus de personnes. En 2019, l'entreprise Microsoft a annoncé un plan d'investissement de plusieurs milliards de dollars dans la société OpenAI, qui est à l'origine du célèbre robot conversationnel ChatGPT, pour d'une part, accélérer la recherche en intelligence artificielle, et d'autre part, concurrencer Google en intégrant les inventions d'OpenAI plus facilement dans ses propres technologies tel que le moteur de recherche Bing.<br><br>
                            Voir la suite de l'<a href="content/files/article.pdf"><span>article</span></a>.<br><br>
                            Écrit par Jérémie Bayon, le 11/11/2023.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section class="contact" id="contact">
            <div><p>Écrivez-moi !</p></div>
            <div class="contact-box">
                <form action="form.php" method="post">
                    <input type="text" name="last_name" id="last_name" placeholder="Nom">
                    <input type="text" name="first_name" id="first_name" placeholder="Prénom">
                    <input type="email" name="email" id="email" placeholder="E-mail">
                    <input type="text" name="phone_number" id="phone_number" placeholder="Téléphone">
                    <textarea name="message" id="message" cols="30" rows="10" placeholder="Entrez votre message..."></textarea>
                    <input type="submit" name="submit" id="submit" value="Envoyer">
                </form>
            </div>
        </section>
    </main>
    <footer>
        <div class="copyright">
            <p>Copyright 2023 J. BAYON</p>
        </div>
        <div class="footer-button">
            <button class="link1">
                <a href="https://www.linkedin.com/in/jeremiebayon/"><img src="content/images/linkedin-logo.webp" alt="logo linkedin"></a>
            </button>
            <button class="link2">
                <a href="https://github.com/Akkyaane"><img src="content/images/github-logo.png" alt="logo github"></a>
            </button>
        </div>
    </footer>
</body>
</html>