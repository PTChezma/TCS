
$(".row:first").css("padding", "4px");
$(".row:first").css("left", "46px");
$(".row:first").css("right", "44px");
$(".row:first").css("position", "fixed");
$(".row:first").css("width", "auto");
$(".row:first").css("top", "0");
$(".row:first").css("z-index", "1");



$("[data-sf-title=Item]").closest('.row').css("margin", "6px");

$(".row:first").prependTo("form");

function myFunction(clicked_id) {
    //DAL_CurrentRow



    $(".sepdiv").remove()

    var parent_tr = $(clicked_id).closest('tr');

    var action = $(parent_tr).find('td:last').text();

    var produc_extcode = $(parent_tr).find('td:first').text();
    var produc_entitytype = $(parent_tr).find('td:last').text();
    var produc_name = $($(parent_tr).find('td')[1]).text();

    var current_row = $(parent_tr).find('.status').attr("data-rowID");
    $("[name='DAL_CurrentRow']").SFCLabel('option', 'text', current_row);

    $("[name='DAL_EntityType']").SFCLabel('option', 'text', produc_entitytype);
    $("[name='DAL_ExtCode']").SFCLabel('option', 'text', produc_extcode);//
    $("[name='DAL_ActiveExtCode']").SFCLabel('option', 'text', produc_extcode);//
    $("[name='DAL_ProductName']").SFCLabel('option', 'text', produc_name);
    $("[name='DAL_F_Status']").SFCLabel('option', 'text', produc_entitytype);


    //DAL_EntityType
    //DAL_ExtCode
    $(".none").css("display", "none");



    $(parent_tr).after("<div class='sepdiv'>  </div>");
    $(".sepdiv").css("height", $("[data-sf-title=Item]").closest('.row').css("height"))
    var current_td = $(parent_tr).next().find(".post");
    //$(parent_tr).css("height", $("[data-sf-title=Item]").closest('.row').css("height"))
    //console.log("add row")


    var position_post = $(parent_tr).offset().top;



    $("[data-sf-title=Item]").closest('.row').css("top", position_post + 50);
    $("[data-sf-title=Item]").closest('.row').css("position", "absolute");
    $("[data-sf-title=Item]").closest('.row').css("width", $(parent_tr).css("width"));
    //.css("width", $(parent_tr).css("width") - 20);
    //$("[data-sf-title=Item]").closest('.row').attr('style', 'width' + $(parent_tr).css("width") + '!important; top:' + position_post + 50 + '');
    //$("[data-sf-title=Item]").closest('.row').attr('style', 'width:' + $(parent_tr).css("width") + ';top:' + position_post + 50+';position:absolute');

    $("[name='DAL_Load']").SFCLabel('option', 'text', produc_extcode + produc_entitytype);

}
function updateStatus() {

    var current_row = $("[name='DAL_CurrentRow']").SFCLabel('option', 'text');

    $(".sepdiv").remove()


    var sts = $("[data-rowID='" + current_row + "']");



    var parent_tr = $(sts).closest('tr');
    var produc_entitytype = $(parent_tr).find('td:last').text();

    if (produc_entitytype === "BuyableProducts") {
        $(parent_tr).find('.status').addClass("panier");
        $(parent_tr).find('.status').text("En attend de paiement");
    }
}

$(document).ready(function () {

});
//name="btn_Confirmer
$("[name=btn_Confirmer]").closest('.scroll-contents').attr('style', 'border-bottom:none !important;');
$("[name=Dal_SUM]").closest('.row').attr('style', 'position: fixed; display:none;   bottom: 3px;    border: 3px #005AA0 solid;    z-index: 1;    width: auto;    left: 9px;    right: 8px;    background-color: white;');
$("[data-sf-title=Item]").closest('.row').find(".panel-body").css("background-color", "#f9fafb");
//panel-toolbars
$("[name=Dal_SUM]").closest('.row').find(".panel-toolbars").hide();
$("[data-sf-title=Item]").closest('.row').find(".panel-header").hide();
//panel-header
//panel-body

$("[name=DAL_Main]").closest('.row').find(".grid-content-table").attr('class', 'TCS_table');

function changecolor() {
    $.each($("[name=DAL_Main]").closest(".view").find(".TCS_table").find("tr"), function (key, trr) {
        $(trr).find('td:last').hide();
        var action = $(trr).find('td:last').text();



        if (action === "BuyableProducts") {
            $(trr).find('td').attr('style', 'background-color: #f5f5f0 !important');

        }
        if (action === "PortfolioProposals") {
            $(trr).find('td').attr('style', 'background-color: #FFFABF !important');
        }

        if (action === "PortfolioPolicies") {
            $(trr).find('td').attr('style', 'background-color: #FFEB00 !important');
        }
        if (action === "Header") {
            $(trr).find('button').hide();
            $(trr).addClass('border_bottom');
        }

    });
}

$('div[name="TabClient"] span[controltype="Cell"]').attr('style', 'border-bottom: 2px solid #F1F2E9 !important');
$('div[name="TabClient"] span[controltype="Cell"]').removeClass("lastcellinrow");

$('[name="DAL_Template"]').css("width", "100%")

function hidepanel() {
    $(".none").css("display", "none");
}

//border_bottom

function generatefield(field) {
    var template = "";
    switch (field.type) {
        case "textbox":
            template = '<input class="f-input"  type="text" id="fname" name ="fname" />';
            break;
        case "calander":
            template = '<input type="date" id="start" name="trip-start" value = "2018-07-22" min = "2018-01-01" max = "2018-12-31" pattern="\d{4}-\d{2}-\d{2}" >';
            break;
        case "dropdown":
            // code block<select name="pets" id="pet-select" />
            //template = '<select class="f-select" name="pets" id="pet-select" />';
            var select = $('<select class="f-select">');
            select.append($("<option>").attr('value', "").text(""));
            $(field.values).each(function (key,val) {
                select.append($("<option>").attr('value', val).text(val));
            });
           
           
            template = select.prop("outerHTML");

            break;
        case "checkbox":
            template = '<input type="checkbox" id="checkbox" /></div>';
            break; 
        default:
            // 
    }

    return template
}

function GetFieldsList() {

    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            var prod_json = JSON.parse(xhr.response);
            // console.log(prod_json);
            var extCode = "103";
            // var prod_json = JSON.parse(inputJson);
            var product = Object.values(prod_json).filter(p => p["extCode"] === extCode)[0];
            //  console.log(product);
            var current_version = Object.values(product["versions"]).filter(v => v["new-proposal-request-template"] !== "")[0];
            var requesttemplate = current_version["new-proposal-request-template"];
            var attributes = current_version["attributes"];
            console.log(attributes);

            $.each(attributes, function (key, attribute) {
                // console.log(attribute)
            });

        }
    }

    xhr.open('GET', 'https://raw.githubusercontent.com/PTChezma/TCS/main/test.json', false);
    xhr.send('');

}

//var attrs = GenerateHtmTemplate();

function gentable() {


    var json = [
        {
            name: "Start Date",
            type: "calander"
        },
        {
            name: "company?",
            type: "checkbox"
        }
        ,
        {
            name: "License plate",
            type: "textbox"
        },
        {
            name: "Family varian",
            type: "dropdown",
            values: ["Individual", "Family"]
        },
        {
            name: "Cover type",
            type: "dropdown",
            values: ["Standard", "Plus"]
        },
        {
            name: "Motorized variant",
            type: "dropdown",
            values: ["1", "2", "3"]
        }
    ]
        ;
    var div = $('<div class="div-fields"/>');
    var table = $('<table class="tab-fields"/>'),

        table_body = $('<tbody/>'),
        body_row = [];
    var row_index = 0;

    for (var index = 0; index < json.length; index++) {
        if (index % 3 === 0) {
            console.log("Nombre pair" + index);
            body_row[row_index] = $('<tr/>');
            body_row[row_index].append('<td> <label class="f-label" for="fname">' + json[index].name + ':</label> ' + generatefield(json[index])+'</td>');
           

        }
        else {
            console.log("Nombre non pair" + index);
            body_row[row_index].append('<td> <label class="f-label" for="fname">' + json[index].name + ':</label>' + generatefield(json[index]) +'</td>');
            if (index + 1 < json.length) {
                body_row[row_index].append('<td> <label class="f-label">' + json[index + 1].name + ':</label> ' + generatefield(json[index+1]) +'</td>');
            }
            row_index++
            index++
        }

    }





    table_body.append(body_row)

    table.append(table_body);
    div.append(table)
    $("[name='DAL_Template']").SFCLabel('option', 'text', div);
}


//gentable()