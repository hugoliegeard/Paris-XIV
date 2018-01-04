'use strict';

/**
 * Validate email function with regular expression
 *
 * https://paulund.co.uk/regular-expression-to-validate-email-address
 * If email isn't valid then return false
 *
 * @param email
 * @return Boolean
 */
var validateEmail = function validateEmail(email) {
    var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    var valid = emailReg.test(email);

    if (!valid) {
        return false;
    } else {
        return true;
    }
};

var validateTel = function validateTel(tel) {
    var telReg = new RegExp("(0|\\+33|0033)[1-9][0-9]{8}");
    var valid = telReg.test(tel);

    if (!valid) {
        return false;
    } else {
        return true;
    }
};

// -- Initialisation de jQuery
$(function () {

    // -- Ecouter a quel moment est soumis notre formulaire
    // En JS : document.getElementById('contact').addEventListener('submit', MaFonctionAExecuter);
    $('#contact').on('submit', function (e) {

        // -- Neutraliser la redirection HTML5
        e.preventDefault();

        // -- Supprimer les différentes erreurs
        $('#contact .has-error').removeClass('has-error');
        $('#contact .text-danger').remove();

        // -- Déclarer les variables à vérifier
        var nom = $('#nom');
        var prenom = $('#prenom');
        var email = $('#email');
        var tel = $('#tel');

        // -- Vérification de chaque champ

        // -- 1. Vérification du Nom
        if (nom.val().length === 0) {
            nom.parent().addClass('has-error');
            $('<p class="text-danger">N\'oubliez pas de saisir votre nom</p>').appendTo(nom.parent());
        } else {
            nom.parent().addClass('has-success');
        }

        // -- 2. Vérification du Prénom
        if (prenom.val().length === 0) {
            prenom.parent().addClass('has-error');
            $('<p class="text-danger">N\'oubliez pas de saisir votre prénom</p>').appendTo(prenom.parent());
        } else {
            prenom.parent().addClass('has-success');
        }

        // -- 3. Vérification du Mail
        if (!validateEmail(email.val())) {
            email.parent().addClass('has-error');
            $('<p class="text-danger">Vérifiez votre adresse email</p>').appendTo(email.parent());
        } else {
            email.parent().addClass('has-success');
        }

        // -- 4. Vérification du Numéro de Téléphone
        if (!validateTel(tel.val())) {
            tel.parent().addClass('has-error');
            $('<p class="text-danger">Vérifiez votre numéro de téléphone</p>').appendTo(tel.parent());
        } else {
            tel.parent().addClass('has-success');
        }

        // -- Je vérifie si mon formulaire comporte des erreurs.
        if ($('#contact').find('.has-error').length === 0) {

            $('#contact').replaceWith('\n                <div class="alert alert-success">\n                    Votre demande a bien \xE9t\xE9 envoy\xE9e !\n                    Nous vous r\xE9pondrons dans les meilleurs d\xE9lais.\n                </div>\n            ');
        } else {

            $('#contact').prepend('\n                <div class="alert alert-danger">\n                    Nous n\'avons pas \xE9t\xE9 en mesure de valider votre\n                    demande. V\xE9rifiez vos informations.\n                </div>\n            ');
        }
    });
});
//# sourceMappingURL=11.validationform.js.map