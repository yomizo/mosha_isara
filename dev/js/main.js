
var app = new Vue({
    el: '#app',
    data: {
        items: [
            { name: "Portfolio", link: "#portfolio", class: "portfolio" },
            { name: "About me", link: "#aboutme", class: "aboutme"},
            { name: "Price", link: "#price", class: "price" },
            { name: "Contact me", link: "#contact", class: "contact" },

        ],
        pics: [
            { name: "SNS用キャラ", link: "src/2dena.jpg" },
            { name: "ゲームイラスト", link: "src/monster.jpg" },
            { name: "2Dキャラ", link: "src/devilgirl(bg).jpg" },
            { name: "リアル", link: "src/womanofmystery.jpg" },
            { name: "コンセプトアート", link: "src/inmyhead.jpg" },
            { name: "資料用", link: "src/document.jpg" },
            { name: "ゆるかわ", link: "src/gotomoon.jpg" },
            { name: "ブログ用漫画", link: "src/tonmana.jpg" },
            { name: "似顔絵", link: "src/nigaoe.jpg" },
            { name: "挿絵", link: "src/loveisblind.jpg" },
            { name: "LogoDesign", link: "src/logo-26.jpg" },
            { name: "WebDesign", link: "src/webdesign.png" },
        ],
        messages: [
            "はじめまして! イラストレーター、webデザイナー、革職人のSeymourです。",
            "子供の頃から絵を描くことが好きで、３年間の修行を経て2018年に会社員からフリーランスに転身しました！",
            "現在は主にランサーズやクラウドワークスで活動中ですが直接のご依頼も承っております。",
            "イラストやロゴなど、ご希望のイメージに沿ったものをお作りいたしますのでまずはお気軽にご相談ください",
            "ご依頼はLine＠に友達追加いただくか、下記コンタクトフォームよりご連絡お待ちしております。",
        ],
    }
})