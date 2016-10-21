var mysql = require('../db.js');

var Tijdslot = function (){
    idTijdsloten = '';
    idSpreker = '';
    onderwerpSlot = '';
    zaalNummer = '';
    beginTijd = '';
    eindTijd = '';
    idSlot = '';
    beginTijd = '';
    eindTijd = '';
    Zaal = '';
    statusID = '';
};

Tijdslot.getSloten = function(callback){
    var query = "SELECT * FROM `tijdsloten` INNER JOIN `spreker` ON `tijdsloten`.`idSpreker` = `spreker`.`idSpreker` ORDER BY `idTijdslot`";
    mysql.connection(function (err,conn){
        if(err){
            return callback(err);

        }
        conn.query(query, function (err, rows){
            if(err){
                return callback(err);
            } var tijdslot = [];
            
           for (var i = 0; i < rows.length; i++) {
                tijdslot.push({
                    "idTijdsloten": rows[i].idTijdsloten,
                    "idSpreker": rows[i].idSpreker,
                    "onderwerpSlot": rows[i].onderwerpSlot,
                    "zaalNummer" : rows[i].zaalNummer,
                    "beginTijd": rows[i].beginTijd,
                    "onderwerp": rows[i].onderwerp,
                    "wensen": rows[i].wensen,
                    "voorkeurSloten": rows[i].voorkeurSloten,
                    "toegewezenSloten": rows[i].toegewezenSloten,
                    "naam": rows[i].naam,
                    "tussenvoegsel": rows[i].tussenvoegsel,
                    "achternaam": rows[i].achternaam,
                    "email": rows[i].email,
                    "rol": rows[i].rol,
                    "idMaaltijd": rows[i].idMaaltijd,
                });
            } return callback(null, tijdslot);
        })
    })
}

Tijdslot.getSlots = function(callback){
    var query = "SELECT * FROM `Slot` ORDER BY `idSlot`";
    mysql.connection(function (err,conn){
        if(err){
            return callback(err);

        }
        conn.query(query, function (err, rows){
            if(err){
                return callback(err);
            } var slot = [];
            
           for (var i = 0; i < rows.length; i++) {
                slot.push({
                    "idSlot": rows[i].idSlot,
                    "beginTijd": rows[i].beginTijd,
                    "eindTijd": rows[i].eindTijd,
                    "Zaal" : rows[i].Zaal,
                    "statusID": rows[i].statusID,
                });
            } return callback(null, slot);
        })
    })
}

module.exports = Tijdslot;