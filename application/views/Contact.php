
<link href="<?php echo Globals::$css; ?>contact_style.css" rel="stylesheet">
</head>
<body>
    <header class="text-center" >
        <h1>Contact</h1>
    </header>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12 text-center">
                <h2>M'envoyer un mail</h2>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 col-xs-offset-0 col-sm-offset-3 text-center">
                <pre>Vous pouvez m'envoyer un mail via le formulaire suivant.
Ou à mon adresse orange : <strong><u>***REMOVED***</u></strong>
N'oubliez pas de laisser des coordonnées valide pour que je puisse vous recontacter</pre>
            </div>
        </div>
        <br/>
        <form class="form-horizontal text-center">
            <div class="row">
                <label for="nom" class="col-xs-2 col-xs-offset-1">Votre nom</label>
                <div class="col-xs-6">
                    <input type="text" class="form-control" required="" id="nom" />
                </div>
            </div>
            <br/>
            <div class="row">
                <label for="mail" class="col-xs-2 col-xs-offset-1">Votre e-mail</label>
                <div class=" col-xs-6">
                    <input id="mail" type="email" class="form-control col-md-5" required="" />
                </div>
            </div>
            <br/>
            <div class="row">
                <label for="text" class="col-sm-offset-1 col-sm-2">Votre message :</label>
                <div class="col-xs-offset-0 col-xs-6">
                    <textarea class="form-control" rows="7" maxlength="500" id="message" required="" ></textarea>
                </div>
            </div>
            <br/>
            <div class="row">
                <div class="col-xs-6 col-xs-offset-0 col-sm-offset-3 text-left">
                    <button type="submit" class="btn btn-success col-xs-6"><span class="glyphicon glyphicon-envelope"></span> Envoyer</button>
                </div>
            </div>
        </form>
    </div>
    <footer>
        <div class="row">
            <div class="col-xs-4">
                <a class="col-xs-12 btn btn-default" href="<?php echo site_url('Accueil') ?>" ><span class="glyphicon glyphicon-chevron-left"></span>Accueil</a>
            </div>
        </div>
    </footer>
</body>
</html>
