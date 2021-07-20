function sendKbnLog(kbnMessage) {
    if (kbnMessage) {
        var dataJSON = {
            user_id: $('[data-user-id]').data('user-id') || 'anonim',
            item_id: window.location.href.substr(window.location.href.lastIndexOf('/')),
            message: kbnMessage,
            geo: $('html').data('geo'),
            url: window.location.href,
            rnd: Math.random()
        };

        var log_json = {
            text: 'LANDING_STAT',
            data: JSON.stringify(dataJSON)
        };

        $.post("https://log.cnt.re/log/site_message", log_json);
    }
}

$(document).on('click', '[data-kibana_message]', function (){
    sendKbnLog($(this).attr("data-kibana_message"));
})