
<link href="<?php echo Globals::$css; ?>contact_style.css" rel="stylesheet">
<script src="<?php echo Globals::$js ?>contact.js" type="text/javascript" ></script>
</head>
<body>
    <header class="text-center" >
        <h1>Contact</h1>
    </header>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-6 col-xs-offset-0 col-sm-offset-3 text-center">
                <pre>Vous pouvez m'envoyer un mail via le formulaire suivant.
Ou à mon adresse orange : <strong><u>***REMOVED***</u></strong>
N'oubliez pas de laisser des coordonnées valide pour que je puisse vous recontacter</pre>
            </div>
        </div>
        <br/>
        <?php
        echo validation_errors();
        echo form_open(site_url('Contact/message'),array('class' => 'form-horiztonal text-center'));
        ?>
<!--        <form class="form-horizontal text-center" method="POST" action="<?php echo site_url("Contact/message"); ?>" >-->
            <div class="row">
                <label for="nom" class="col-sm-2 col-sm-offset-1 col-xs-offset-0 col-xs-2">Votre nom</label>
                <div class="col-sm-6 col-xs-10">
                    <input type="text" class="form-control" name="nom_u" value="<?php echo set_value('nom_u') ?>" required="" id="nom" />
                </div>
            </div>
            <br/>
            <div class="row">
                <label for="mail" class="col-sm-2 col-sm-offset-1 col-xs-offset-0 col-xs-2">Votre e-mail</label>
                <div class="col-sm-6 col-xs-10">
                    <input id="mail" type="email" name="mail" value="<?php echo set_value('mail'); ?>" class="form-control col-md-5" required="" />
                </div>
            </div>
            <br/>
            <div class="row">
                <label for="objet" class="col-sm-2 col-sm-offset-1 col-xs-offset-0 col-xs-2">Objet</label>
                <div class="col-sm-6 col-xs-10">
                    <input id="objet" type="text" name="objet" value="<?php echo set_value('objet'); ?>" class="form-control col-md-5" required="" />
                </div>
            </div>
            <br/>
            <div class="row">
                <label for="message" class="col-sm-2 col-sm-offset-1 col-xs-offset-0 col-xs-2">Votre message</label>
                <div class="col-sm-6 col-xs-10">
                    <textarea class="form-control" rows="7" name="message" maxlength="500" id="message" required="" ><?php echo set_value('message'); ?></textarea>
                </div>
            </div>
            <br/>
            <div class="row">
                <div class="col-xs-10 col-sm-6 col-xs-offset-2 col-sm-offset-3">
                    <button type="submit" class="btn btn-success col-xs-5"><span class="glyphicon glyphicon-envelope"></span> Envoyer</button>
                    <button type="reset" class="btn btn-danger col-xs-5 col-xs-offset-2">Effacer</button>
                </div>
            </div>
        </form>
    </div>
    <footer>
        <div class="row">
            <div class="col-sm-4 col-xs-12">
                <a class="col-xs-12 btn btn-default" href="<?php echo site_url('Accueil') ?>" ><span class="glyphicon glyphicon-chevron-left"></span>Accueil</a>
            </div>
        </div>
    </footer>
</body>
</html>
