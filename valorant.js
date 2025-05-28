const images = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27];

const picture_images = [
    'https://appmedia.jp/wp-content/uploads/2024/10/102450_urswg.webp',//ジェット
    'https://appmedia.jp/wp-content/uploads/2024/10/102451_n4wda.webp',//フェニックス
    'https://appmedia.jp/wp-content/uploads/2024/10/102451_axmlk.webp',//ネオン
    'https://appmedia.jp/wp-content/uploads/2024/10/102451_3lupz.webp',//ヨル
    'https://appmedia.jp/wp-content/uploads/2024/10/102451_8lwo4.webp',//レイズ
    'https://appmedia.jp/wp-content/uploads/2024/10/102451_a3jmc.webp',//レイナ
    'https://appmedia.jp/wp-content/uploads/2024/10/102452_ltq0o.webp',//アイソ
    'https://appmedia.jp/wp-content/uploads/2023/06/101811_9esu4.webp',//ウェイレイ
    'https://appmedia.jp/wp-content/uploads/2024/10/102452_kawcj.webp',//ソーヴァ
    'https://appmedia.jp/wp-content/uploads/2024/10/102452_qhcgd.webp',//KAY/O
    'https://appmedia.jp/wp-content/uploads/2024/10/102452_n05kl.webp',//スカイ
    'https://appmedia.jp/wp-content/uploads/2024/10/102452_gjwef.webp',//フェイド
    'https://appmedia.jp/wp-content/uploads/2024/10/102453_zlbdp.webp',//ブリーチ
    'https://appmedia.jp/wp-content/uploads/2024/10/102452_wejd5.webp',//ゲッコー
    'https://appmedia.jp/wp-content/uploads/2025/01/104157_byjz0.webp',//テホ
    'https://appmedia.jp/wp-content/uploads/2024/10/102454_djghe.webp',//セージ
    'https://appmedia.jp/wp-content/uploads/2024/10/102454_yjxc1.webp',//キルジョイ
    'https://appmedia.jp/wp-content/uploads/2024/10/102454_pdiuz.webp',//サイファー
    'https://appmedia.jp/wp-content/uploads/2024/10/102454_j0xzl.webp',//チェンバー
    'https://appmedia.jp/wp-content/uploads/2024/10/102455_uevjn.webp',//デッドロック
    'https://appmedia.jp/wp-content/uploads/2024/09/120938_ac05l.webp',//ヴァイス
    'https://appmedia.jp/wp-content/uploads/2024/10/102454_7l3dv.webp',//ブリムストーン
    'https://appmedia.jp/wp-content/uploads/2024/10/102453_15fkt.webp',//アストラ
    'https://appmedia.jp/wp-content/uploads/2024/10/102453_dqika.webp',//ヴァイパー
    'https://appmedia.jp/wp-content/uploads/2024/10/102453_87ag3.webp',//オーメン
    'https://appmedia.jp/wp-content/uploads/2024/10/102454_ua8fj.webp',//ハーバー
    'https://appmedia.jp/wp-content/uploads/2024/10/102453_r6kd3.webp',//クローヴ
]

const dhue_images = [
    'https://appmedia.jp/wp-content/uploads/2024/10/102450_urswg.webp',//ジェット
    'https://appmedia.jp/wp-content/uploads/2024/10/102451_n4wda.webp',//フェニックス
    'https://appmedia.jp/wp-content/uploads/2024/10/102451_axmlk.webp',//ネオン
    'https://appmedia.jp/wp-content/uploads/2024/10/102451_3lupz.webp',//ヨル
    'https://appmedia.jp/wp-content/uploads/2024/10/102451_8lwo4.webp',//レイズ
    'https://appmedia.jp/wp-content/uploads/2024/10/102451_a3jmc.webp',//レイナ
    'https://appmedia.jp/wp-content/uploads/2024/10/102452_ltq0o.webp',//アイソ
    'https://appmedia.jp/wp-content/uploads/2023/06/101811_9esu4.webp',//ウェイレイ
]
const dhue_number = [1,2,3,4,5,6,7,8]

const inisi_images = [
    'https://appmedia.jp/wp-content/uploads/2024/10/102452_kawcj.webp',//ソーヴァ
    'https://appmedia.jp/wp-content/uploads/2024/10/102452_qhcgd.webp',//KAY/O
    'https://appmedia.jp/wp-content/uploads/2024/10/102452_n05kl.webp',//スカイ
    'https://appmedia.jp/wp-content/uploads/2024/10/102452_gjwef.webp',//フェイド
    'https://appmedia.jp/wp-content/uploads/2024/10/102453_zlbdp.webp',//ブリーチ
    'https://appmedia.jp/wp-content/uploads/2024/10/102452_wejd5.webp',//ゲッコー
    'https://appmedia.jp/wp-content/uploads/2025/01/104157_byjz0.webp',//テホ
]
const inisi_number = [1,2,3,4,5,6,7]

const senti_images = [
    'https://appmedia.jp/wp-content/uploads/2024/10/102454_djghe.webp',//セージ
    'https://appmedia.jp/wp-content/uploads/2024/10/102454_yjxc1.webp',//キルジョイ
    'https://appmedia.jp/wp-content/uploads/2024/10/102454_pdiuz.webp',//サイファー
    'https://appmedia.jp/wp-content/uploads/2024/10/102454_j0xzl.webp',//チェンバー
    'https://appmedia.jp/wp-content/uploads/2024/10/102455_uevjn.webp',//デッドロック
    'https://appmedia.jp/wp-content/uploads/2024/09/120938_ac05l.webp',//ヴァイス
]
const senti_number = [1,2,3,4,5,6]

const cont_images = [
    'https://appmedia.jp/wp-content/uploads/2024/10/102454_7l3dv.webp',//ブリムストーン
    'https://appmedia.jp/wp-content/uploads/2024/10/102453_15fkt.webp',//アストラ
    'https://appmedia.jp/wp-content/uploads/2024/10/102453_dqika.webp',//ヴァイパー
    'https://appmedia.jp/wp-content/uploads/2024/10/102453_87ag3.webp',//オーメン
    'https://appmedia.jp/wp-content/uploads/2024/10/102454_ua8fj.webp',//ハーバー
    'https://appmedia.jp/wp-content/uploads/2024/10/102453_r6kd3.webp',//クローヴ
]
const cont_number = [1,2,3,4,5,6]

let decide_roll_shaffule = [
    'デュエリスト　',
    'イニシエーター　',
    'センチネル　',
    'コントローラー　',//五人で自由枠なしでやるとばぐる　直せ
]

let down_chara = [
    'https://appmedia.jp/wp-content/uploads/2024/10/102450_urswg.webp',//ジェット
    'https://appmedia.jp/wp-content/uploads/2024/10/102451_n4wda.webp',//フェニックス
    'https://appmedia.jp/wp-content/uploads/2024/10/102451_axmlk.webp',//ネオン
    'https://appmedia.jp/wp-content/uploads/2024/10/102451_3lupz.webp',//ヨル
    'https://appmedia.jp/wp-content/uploads/2024/10/102451_8lwo4.webp',//レイズ
    'https://appmedia.jp/wp-content/uploads/2024/10/102451_a3jmc.webp',//レイナ
    'https://appmedia.jp/wp-content/uploads/2024/10/102452_ltq0o.webp',//アイソ
    'https://appmedia.jp/wp-content/uploads/2023/06/101811_9esu4.webp',//ウェイレイ
    'https://appmedia.jp/wp-content/uploads/2024/10/102452_kawcj.webp',//ソーヴァ
    'https://appmedia.jp/wp-content/uploads/2024/10/102452_qhcgd.webp',//KAY/O
    'https://appmedia.jp/wp-content/uploads/2024/10/102452_n05kl.webp',//スカイ
    'https://appmedia.jp/wp-content/uploads/2024/10/102452_gjwef.webp',//フェイド
    'https://appmedia.jp/wp-content/uploads/2024/10/102453_zlbdp.webp',//ブリーチ
    'https://appmedia.jp/wp-content/uploads/2024/10/102452_wejd5.webp',//ゲッコー
    'https://appmedia.jp/wp-content/uploads/2025/01/104157_byjz0.webp',//テホ
    'https://appmedia.jp/wp-content/uploads/2024/10/102454_djghe.webp',//セージ
    'https://appmedia.jp/wp-content/uploads/2024/10/102454_yjxc1.webp',//キルジョイ
    'https://appmedia.jp/wp-content/uploads/2024/10/102454_pdiuz.webp',//サイファー
    'https://appmedia.jp/wp-content/uploads/2024/10/102454_j0xzl.webp',//チェンバー
    'https://appmedia.jp/wp-content/uploads/2024/10/102455_uevjn.webp',//デッドロック
    'https://appmedia.jp/wp-content/uploads/2024/09/120938_ac05l.webp',//ヴァイス
    'https://appmedia.jp/wp-content/uploads/2024/10/102454_7l3dv.webp',//ブリムストーン
    'https://appmedia.jp/wp-content/uploads/2024/10/102453_15fkt.webp',//アストラ
    'https://appmedia.jp/wp-content/uploads/2024/10/102453_dqika.webp',//ヴァイパー
    'https://appmedia.jp/wp-content/uploads/2024/10/102453_87ag3.webp',//オーメン
    'https://appmedia.jp/wp-content/uploads/2024/10/102454_ua8fj.webp',//ハーバー
    'https://appmedia.jp/wp-content/uploads/2024/10/102453_r6kd3.webp',//クローヴ
]

let down_roll = [
    { id: 1, img: 'https://appmedia.jp/wp-content/uploads/2024/10/102450_urswg.webp'},
    { id: 1, img: 'https://appmedia.jp/wp-content/uploads/2024/10/102451_n4wda.webp'},
    { id: 1, img: 'https://appmedia.jp/wp-content/uploads/2024/10/102451_axmlk.webp'},
    { id: 1, img: 'https://appmedia.jp/wp-content/uploads/2024/10/102451_3lupz.webp'},
    { id: 1, img: 'https://appmedia.jp/wp-content/uploads/2024/10/102451_8lwo4.webp'},
    { id: 1, img: 'https://appmedia.jp/wp-content/uploads/2024/10/102451_a3jmc.webp'},
    { id: 1, img: 'https://appmedia.jp/wp-content/uploads/2024/10/102452_ltq0o.webp'},
    { id: 1, img: 'https://appmedia.jp/wp-content/uploads/2023/06/101811_9esu4.webp'},
    { id: 2, img: 'https://appmedia.jp/wp-content/uploads/2024/10/102452_kawcj.webp'},
    { id: 2, img: 'https://appmedia.jp/wp-content/uploads/2024/10/102452_qhcgd.webp'},
    { id: 2, img: 'https://appmedia.jp/wp-content/uploads/2024/10/102452_n05kl.webp'},
    { id: 2, img: 'https://appmedia.jp/wp-content/uploads/2024/10/102452_gjwef.webp'},
    { id: 2, img: 'https://appmedia.jp/wp-content/uploads/2024/10/102453_zlbdp.webp'},
    { id: 2, img: 'https://appmedia.jp/wp-content/uploads/2024/10/102452_wejd5.webp'},
    { id: 2, img: 'https://appmedia.jp/wp-content/uploads/2025/01/104157_byjz0.webp'},
    { id: 3, img: 'https://appmedia.jp/wp-content/uploads/2024/10/102454_djghe.webp'},
    { id: 3, img: 'https://appmedia.jp/wp-content/uploads/2024/10/102454_yjxc1.webp'},
    { id: 3, img: 'https://appmedia.jp/wp-content/uploads/2024/10/102454_pdiuz.webp'},
    { id: 3, img: 'https://appmedia.jp/wp-content/uploads/2024/10/102454_j0xzl.webp'},
    { id: 3, img: 'https://appmedia.jp/wp-content/uploads/2024/10/102455_uevjn.webp'},
    { id: 3, img: 'https://appmedia.jp/wp-content/uploads/2024/09/120938_ac05l.webp'},
    { id: 4, img: 'https://appmedia.jp/wp-content/uploads/2024/10/102454_7l3dv.webp'},
    { id: 4, img: 'https://appmedia.jp/wp-content/uploads/2024/10/102453_15fkt.webp'},
    { id: 4, img: 'https://appmedia.jp/wp-content/uploads/2024/10/102453_dqika.webp'},
    { id: 4, img: 'https://appmedia.jp/wp-content/uploads/2024/10/102453_87ag3.webp'},
    { id: 4, img: 'https://appmedia.jp/wp-content/uploads/2024/10/102454_ua8fj.webp'},
    { id: 4, img: 'https://appmedia.jp/wp-content/uploads/2024/10/102453_r6kd3.webp'},
]
let remove_picture = [];

const custom1_number = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27];

const custom_picture_1 = [
    'https://appmedia.jp/wp-content/uploads/2024/10/102450_urswg.webp',//ジェット
    'https://appmedia.jp/wp-content/uploads/2024/10/102451_n4wda.webp',//フェニックス
    'https://appmedia.jp/wp-content/uploads/2024/10/102451_axmlk.webp',//ネオン
    'https://appmedia.jp/wp-content/uploads/2024/10/102451_3lupz.webp',//ヨル
    'https://appmedia.jp/wp-content/uploads/2024/10/102451_8lwo4.webp',//レイズ
    'https://appmedia.jp/wp-content/uploads/2024/10/102451_a3jmc.webp',//レイナ
    'https://appmedia.jp/wp-content/uploads/2024/10/102452_ltq0o.webp',//アイソ
    'https://appmedia.jp/wp-content/uploads/2023/06/101811_9esu4.webp',//ウェイレイ
    'https://appmedia.jp/wp-content/uploads/2024/10/102452_kawcj.webp',//ソーヴァ
    'https://appmedia.jp/wp-content/uploads/2024/10/102452_qhcgd.webp',//KAY/O
    'https://appmedia.jp/wp-content/uploads/2024/10/102452_n05kl.webp',//スカイ
    'https://appmedia.jp/wp-content/uploads/2024/10/102452_gjwef.webp',//フェイド
    'https://appmedia.jp/wp-content/uploads/2024/10/102453_zlbdp.webp',//ブリーチ
    'https://appmedia.jp/wp-content/uploads/2024/10/102452_wejd5.webp',//ゲッコー
    'https://appmedia.jp/wp-content/uploads/2025/01/104157_byjz0.webp',//テホ
    'https://appmedia.jp/wp-content/uploads/2024/10/102454_djghe.webp',//セージ
    'https://appmedia.jp/wp-content/uploads/2024/10/102454_yjxc1.webp',//キルジョイ
    'https://appmedia.jp/wp-content/uploads/2024/10/102454_pdiuz.webp',//サイファー
    'https://appmedia.jp/wp-content/uploads/2024/10/102454_j0xzl.webp',//チェンバー
    'https://appmedia.jp/wp-content/uploads/2024/10/102455_uevjn.webp',//デッドロック
    'https://appmedia.jp/wp-content/uploads/2024/09/120938_ac05l.webp',//ヴァイス
    'https://appmedia.jp/wp-content/uploads/2024/10/102454_7l3dv.webp',//ブリムストーン
    'https://appmedia.jp/wp-content/uploads/2024/10/102453_15fkt.webp',//アストラ
    'https://appmedia.jp/wp-content/uploads/2024/10/102453_dqika.webp',//ヴァイパー
    'https://appmedia.jp/wp-content/uploads/2024/10/102453_87ag3.webp',//オーメン
    'https://appmedia.jp/wp-content/uploads/2024/10/102454_ua8fj.webp',//ハーバー
    'https://appmedia.jp/wp-content/uploads/2024/10/102453_r6kd3.webp',//クローヴ
]

const custom2_number = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27];

const custom_picture_2 = [
    'https://appmedia.jp/wp-content/uploads/2024/10/102450_urswg.webp',//ジェット
    'https://appmedia.jp/wp-content/uploads/2024/10/102451_n4wda.webp',//フェニックス
    'https://appmedia.jp/wp-content/uploads/2024/10/102451_axmlk.webp',//ネオン
    'https://appmedia.jp/wp-content/uploads/2024/10/102451_3lupz.webp',//ヨル
    'https://appmedia.jp/wp-content/uploads/2024/10/102451_8lwo4.webp',//レイズ
    'https://appmedia.jp/wp-content/uploads/2024/10/102451_a3jmc.webp',//レイナ
    'https://appmedia.jp/wp-content/uploads/2024/10/102452_ltq0o.webp',//アイソ
    'https://appmedia.jp/wp-content/uploads/2023/06/101811_9esu4.webp',//ウェイレイ
    'https://appmedia.jp/wp-content/uploads/2024/10/102452_kawcj.webp',//ソーヴァ
    'https://appmedia.jp/wp-content/uploads/2024/10/102452_qhcgd.webp',//KAY/O
    'https://appmedia.jp/wp-content/uploads/2024/10/102452_n05kl.webp',//スカイ
    'https://appmedia.jp/wp-content/uploads/2024/10/102452_gjwef.webp',//フェイド
    'https://appmedia.jp/wp-content/uploads/2024/10/102453_zlbdp.webp',//ブリーチ
    'https://appmedia.jp/wp-content/uploads/2024/10/102452_wejd5.webp',//ゲッコー
    'https://appmedia.jp/wp-content/uploads/2025/01/104157_byjz0.webp',//テホ
    'https://appmedia.jp/wp-content/uploads/2024/10/102454_djghe.webp',//セージ
    'https://appmedia.jp/wp-content/uploads/2024/10/102454_yjxc1.webp',//キルジョイ
    'https://appmedia.jp/wp-content/uploads/2024/10/102454_pdiuz.webp',//サイファー
    'https://appmedia.jp/wp-content/uploads/2024/10/102454_j0xzl.webp',//チェンバー
    'https://appmedia.jp/wp-content/uploads/2024/10/102455_uevjn.webp',//デッドロック
    'https://appmedia.jp/wp-content/uploads/2024/09/120938_ac05l.webp',//ヴァイス
    'https://appmedia.jp/wp-content/uploads/2024/10/102454_7l3dv.webp',//ブリムストーン
    'https://appmedia.jp/wp-content/uploads/2024/10/102453_15fkt.webp',//アストラ
    'https://appmedia.jp/wp-content/uploads/2024/10/102453_dqika.webp',//ヴァイパー
    'https://appmedia.jp/wp-content/uploads/2024/10/102453_87ag3.webp',//オーメン
    'https://appmedia.jp/wp-content/uploads/2024/10/102454_ua8fj.webp',//ハーバー
    'https://appmedia.jp/wp-content/uploads/2024/10/102453_r6kd3.webp',//クローヴ
]

function pushButton()
{
    let $menber_number = document.getElementById('menber_').value; //値が欲しい場合はvalueを追加 https://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q12166934472
    const errorMessage = document.getElementById('error');
    let custom_1 = document.getElementById('custom_1');

    if($menber_number !== '') //テキストの中身が空白の時を言いたい場合nullじゃなくて''を使う
    {
        if(custom_1.checked && $menber_number == 10)
        {
            let parent= document.getElementById('menber');
            let text = document.createElement('div');
            text.innerText = '同じチームの人をチェックボックスをつけてください';
            parent.appendChild(text);

            for(let i = 1; i < 11; i++)
            {
                let br = document.createElement('br');
                let team1_label = document.createElement('label');
                let check = document.createElement('input');
                check.type = 'checkbox';
                check.id =  'custom_random_check' + i;

                team1_label.innerText = i + '人目の名前';

                let team1_input = document.createElement('input');
                team1_input.id = 'custom_random' + i;

                parent.appendChild(br);
                parent.appendChild(team1_label);
                parent.appendChild(team1_input);
                parent.appendChild(check);
            }
            decide.style.display = 'inline';
            send.style.display = 'none';
        }else
        {

            errorMessage.style.display = 'none';
        let numberIndex = 1;


        const decide = document.getElementById('decide');
        const send = document.getElementById('send');
        if(decide.style.display === 'none') //✅ 方法1：style.display を使う（一般的でおすすめ）
        {
        decide.style.display = 'inline';
        send.style.display = 'none';
        }
        while(numberIndex - 1 < $menber_number){
        let elementId = document.createElement('br');
        let label = document.createElement('label');
        label.textContent = (numberIndex) + "人目の名前を入力　　　";//適当なところにlabelを追加：textcontentで入力

        const input_menber = document.createElement('input');
        input_menber.type = 'text';
        input_menber.id = 'ID' + numberIndex;

        let parent= document.getElementById('menber');
        parent.appendChild(elementId)
        parent.appendChild(label);
        parent.appendChild(input_menber); //jsでの改行をしらべる
    
        numberIndex++;
        }
      }
    }else
    {
        errorMessage.style.display = 'block';
    }
    //let menber_number = getElementById('menber_'); が邪魔してるなければテキストフィールドが作られた 
    //解決：ページ内に一つしか存在できない https://www.youtube.com/watch?v=fAluwAmHrws
}

function decideButton()
{
    const errorMessage = document.getElementById('error');
    let $menber_number = document.getElementById('menber_').value; //値が欲しい場合はvalueを追加 https://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q12166934472
    let check = document.getElementById('custom_1');
    let numberIndex = 1;

    if($menber_number == 10 && check.checked)
    {
        let team1_name = [];
        let team2_name = [];
        let team1 = document.getElementById('team1_random');
        let team2 = document.getElementById('team2_random');

        let text1 = document.getElementById('team1_random_text');
        let text2 = document.getElementById('team2_random_text');

        for(let i = 1; i < 11; i++)
        {
            let name = document.getElementById('custom_random' + i).value;
            if(name !== '')
            {
                errorMessage.style.display = 'none';
                let team_check = document.getElementById('custom_random_check' + i);
                if(team_check.checked)
                {
                    team1_name.push(name);               
                }
                if(!team_check.checked)
                {
                    team2_name.push(name);
                }
            }else
            {
                errorMessage.style.display = 'block';
                break;
            }
        }
        for(let i = 0; i < 5; i++) //tean1
        {
            let div = document.createElement('div');
            let name = team1_name[i];
            div.innerText = name;
            div.id = 'num_team1_' + i;
            team1.appendChild(div);
        }
        for(let i = 0; i < 5; i++) //tean1
        {
            let div = document.createElement('div');
            let name = team2_name[i];
            div.innerText = name;
            div.id = 'num_team2_' + i;
            team2.appendChild(div);
        }
        const random_custom = document.getElementById('random_custom');
        decide.style.display = 'none';
        random_custom.style.display = 'inline';

        text1.style.display = 'inline';
        text2.style.display = 'inline';
    }else
    {
        let name = document.getElementById('ID' + numberIndex).value;

    if(name === '')
    {
        errorMessage.style.display = 'block';
    }else
    {
        errorMessage.style.display = 'none';
        while(numberIndex - 1 < $menber_number)
        {
            let name = document.getElementById('ID' + numberIndex).value;
            if(name !== '')
            {
            let parent_name = document.getElementById('name');

            let elementId = document.createElement('div'); //https://posipan.com/add-remove-id-class/
            elementId.id = 'id' + numberIndex;
            elementId.innerText = name;
            elementId.classList.add('picture_text');
            parent_name.appendChild(elementId)

            numberIndex++;

            const decide = document.getElementById('decide');
            const random = document.getElementById('random');
            decide.style.display = 'none';
            random.style.display = 'inline';
            }
        }
    }
    }
}

function randomButton_custom()
{
    custom1_shuffle(custom1_number);
    custom2_shuffle(custom2_number);
    for(let i = 0; i < 5; i++)
    {
        let parent1 = document.getElementById('num_team1_' + i);
        let parent2 = document.getElementById('num_team2_' + i);

        let result1 = custom1_number[i];
        let result2 = custom2_number[i];

        let img_1 = document.createElement('img');
        let picture1 = custom_picture_1[result1 -1];
        img_1.src = picture1;
        img_1.classList.add("picture");
        parent1.appendChild(img_1);

        let img_2 = document.createElement('img');
        let picture2 = custom_picture_2[result2 -1];
        img_2.src = picture2;
        img_2.classList.add("picture");
        parent2.appendChild(img_2);

        console.log(result1);
        console.log(result2);
    }
}

function custom1_shuffle(custom1_number) //lengthで文字列が何個あるかを取得してる
{
    for(let i = custom1_number.length -1; i>0; i--){
        const j = Math.floor(Math.random() * (i + 1)); 
        //Math.floor()で小数点以下切り捨て整数に
        //Math.randomで0以上1未満のランダムな小数を返す
        //Math.random() * (i + 1) によって、0以上j以下iの範囲でランダムな整数 j を生成します。
        [custom1_number[i], custom1_number[j]] = [custom1_number[j], custom1_number[i]];
    }
    return custom1_number;
}

function custom2_shuffle(custom2_number) //lengthで文字列が何個あるかを取得してる
{
    for(let i = custom2_number.length -1; i>0; i--){
        const j = Math.floor(Math.random() * (i + 1)); 
        //Math.floor()で小数点以下切り捨て整数に
        //Math.randomで0以上1未満のランダムな小数を返す
        //Math.random() * (i + 1) によって、0以上j以下iの範囲でランダムな整数 j を生成します。
        [custom2_number[i], custom2_number[j]] = [custom2_number[j], custom2_number[i]];
    }
    return custom2_number;
}

function randomButton()
{

    let $menber_number = document.getElementById('menber_').value;
    let picture_sheets = $menber_number;
    shuffle(images);
    while(picture_sheets > 0){
        let picture = document.createElement('img');
        let picture_parent = document.getElementById('id' + picture_sheets);

        let result = images[picture_sheets -1];
        picture.src = picture_images[result -1];
        picture.className = 'picture_random';
        picture_parent.appendChild(picture);
        picture_sheets--;
    }
    const random = document.getElementById('random');
    const reroll = document.getElementById('reroll');
    random.style.display ='none';
    reroll.style.display = 'inline';
}

function reroll()
{
    let img = document.getElementsByClassName('picture_random');
    while(img.length > 0)
    {
        img[img.length -1].remove();
        img.length--;
    }
    randomButton();
}

function shuffle(images) //lengthで文字列が何個あるかを取得してる
{
    for(let i = images.length -1; i>0; i--){
        const j = Math.floor(Math.random() * (i + 1)); 
        //Math.floor()で小数点以下切り捨て整数に
        //Math.randomで0以上1未満のランダムな小数を返す
        //Math.random() * (i + 1) によって、0以上j以下iの範囲でランダムな整数 j を生成します。
        [images[i], images[j]] = [images[j], images[i]];
    }
    return images;
}
//バン機能; //各ロール //必須ピック
function each_pushButton()
{
    let error = document.getElementById('error_each');
    let number_each = 1;
    let each_menber = document.getElementById('menber_each').value;
    if(each_menber !== '')
    {
      while(each_menber > number_each -1)
      {
        error.style.display = 'none';
        let br = document.createElement('br');

        let label = document.createElement('label');
        label.textContent = number_each + "人目の名前を入力　　　";

        let parent = document.getElementById('number_each');

        parent.appendChild(br);
        parent.appendChild(label);

        const input_each = document.createElement('input');
        input_each.id = 'Id' + number_each;
        parent.appendChild(input_each);

        const send = document.getElementById('send_each');
        const decide = document.getElementById('decide_each');
        send.style.display = 'none';
        decide.style.display = 'inline';

        number_each++
       }
    }else{
        error.style.display ='inline';
    }
}  

function each_decideButton()
{
    let error = document.getElementById('error_each');
    let number_each =  1;
    let each_menber = document.getElementById('menber_each').value; 
    let name_each = document.getElementById('Id' + number_each).value;
    if(name_each !== '')
    {      
        error.style.display = 'none';
        while(number_each - 1 < each_menber){

        let name_each = document.getElementById('Id' + number_each).value;
        let parent_ = document.getElementById('name_each');
        let elementId_each = document.createElement('div');
        elementId_each.id = 'id_each' + number_each;
        elementId_each.classList.add('text_name');
        elementId_each.innerText = name_each + '　　';
        parent_.appendChild(elementId_each); 
        

        let parent = document.getElementById('id_each' + number_each);
        let label_dhue = document.createElement('label_dhue');
    let label_inisi = document.createElement('label_inisi');
    let label_senti = document.createElement('label_senti');
    let label_cont = document.createElement('label_cont');

    parent.appendChild(label_dhue);
    parent.appendChild(label_inisi);
    parent.appendChild(label_senti);
    parent.appendChild(label_cont);
    label_dhue.innerText = 'デュエリスト';
    label_inisi.innerText = 'イニシエーター';
    label_senti.innerText = 'センチネル';
    label_cont.innerText = 'コントローラー';
    

    let input_dhue = document.createElement('input');
    input_dhue.type = 'checkbox';
    input_dhue.id = 'dhue_check' + number_each;
    label_dhue.appendChild(input_dhue);

    let input_inisi = document.createElement('input');
    input_inisi.type = 'checkbox';
    input_inisi.id = 'inisi_check'+ number_each;
    label_inisi.appendChild(input_inisi);
    
    let input_senti = document.createElement('input');
    input_senti.type = 'checkbox';
    input_senti.id = 'senti_check' + number_each;
    label_senti.appendChild(input_senti);

    let input_cont = document.createElement('input');
    input_cont.type = 'checkbox';
    input_cont.id = 'cont_check' + number_each;
    label_cont.appendChild(input_cont);

    let p = document.createElement('p');
    p.id = 'p_name'+ number_each;
    let name = document.getElementById('Id' + number_each).value;
    p.innerText = name;
    let parent_each = document.getElementById('id_each' + number_each);
    parent_each.appendChild(p);

    const decide = document.getElementById('decide_each');
    decide.style.display = 'none'; 
    const random_each = document.getElementById('each_random');
    random_each.style.display ='inline';
    number_each++;
    }
    }else{
        error.style.display= 'inline';
    }
}

function each_random()
{

    let check_error = document.getElementById('check_error');
    let error = document.getElementById('error_each');
    error.style.display= 'none';
    check_error.style.display = "none";
    let menber_ = document.getElementById('menber_each').value;
    let number_each = 1;
    let checked = document.querySelectorAll('input[type="checkbox"]:checked').length;

    if (checked <= menber_)
    {
        error.style.display= 'none';
        while(menber_ + 1 > number_each)
    {

    let input_dhue = document.getElementById('dhue_check' + number_each);
    if(input_dhue)
    {
        if(input_dhue.checked)
        {
            let img = document.createElement('img');
            img.classList.add('picture');

            dhue_shuffle(dhue_number);
            let result = dhue_number[number_each -1];
            img.src = dhue_images[result -1];
            img.id = 'each_id' + number_each;
            let parent_ = document.getElementById('p_name' + number_each);
            parent_.appendChild(img);

            let random = document.getElementById('each_random');
            let reroll = document.getElementById('each_reroll');
            error.style.display= 'none';
            random.style.display='none';
            reroll.style.display='inline';
        }
    }

    let input_inisi = document.getElementById('inisi_check' + number_each);
    if(input_inisi)
    {
        if(input_inisi.checked)
        {
            let img = document.createElement('img');
            img.classList.add('picture');

            inisi_shuffle(inisi_number);
            let result = inisi_number[number_each -1];
            img.src = inisi_images[result -1];
            img.id = 'each_id' + number_each;
            let parent_ = document.getElementById('p_name' + number_each);
            parent_.appendChild(img);

            let random = document.getElementById('each_random');
            let reroll = document.getElementById('each_reroll');
            error.style.display= 'none';
            random.style.display='none';
            reroll.style.display='inline';
        }
    }

    let input_senti = document.getElementById('senti_check' + number_each);
    if(input_senti)
    {
        if(input_senti.checked)
        {
            let img = document.createElement('img');
            img.classList.add('picture');

            senti_shuffle(senti_number);
            let result = senti_number[number_each -1];
            img.src = senti_images[result -1];
            img.id = 'each_id' + number_each;
            let parent_ = document.getElementById('p_name'+ number_each);
            parent_.appendChild(img);

            let random = document.getElementById('each_random');
            let reroll = document.getElementById('each_reroll');
            error.style.display= 'none';
            random.style.display='none';
            reroll.style.display='inline';
        }
    }

    let input_cont = document.getElementById('cont_check' + number_each);
    if(input_cont)
    {
        if(input_cont.checked)
        {
            let img = document.createElement('img');
            img.classList.add('picture');

            dhue_shuffle(cont_number);
            let result = cont_number[number_each -1];
            img.src = cont_images[result -1];
            img.id = 'each_id' + number_each;
            let parent_ = document.getElementById('p_name'+ number_each);
            parent_.appendChild(img);

            let random = document.getElementById('each_random');
            let reroll = document.getElementById('each_reroll');
            error.style.display= 'none';
            random.style.display='none';
            reroll.style.display='inline';
        }
    }
    number_each ++;
  }
    }else
    {
        let each_menber = document.getElementById('menber_each').value;
        let each_menber_ = each_menber;
        check_error.style.display='inline';
        check_error.insertAdjacentHTML('afterbegin', each_menber_);
    }
}

function each_reroll()
{
    let menber = document.getElementById('menber_each').value;
    let number = 1;
    error.style.display= 'none';
    check_error.style.display = "none";

    while(menber > number -1)
    {
        let img = document.getElementById('each_id' + number);
        img.remove();
        number++;
    }
    each_random();
}

function dhue_shuffle(dhue_number) //lengthで文字列が何個あるかを取得してる
{
    for(let i = dhue_number.length -1; i>0; i--){
        const j = Math.floor(Math.random() * (i + 1)); 
        //Math.floor()で小数点以下切り捨て整数に
        //Math.randomで0以上1未満のランダムな小数を返す
        //Math.random() * (i + 1) によって、0以上j以下iの範囲でランダムな整数 j を生成します。
        [dhue_number[i], dhue_number[j]] = [dhue_number[j], dhue_number[i]];
    }
    return dhue_number;
}
function inisi_shuffle(inisi_number) //lengthで文字列が何個あるかを取得してる
{
    for(let i = inisi_number.length -1; i>0; i--){
        const j = Math.floor(Math.random() * (i + 1)); 
        //Math.floor()で小数点以下切り捨て整数に
        //Math.randomで0以上1未満のランダムな小数を返す
        //Math.random() * (i + 1) によって、0以上j以下iの範囲でランダムな整数 j を生成します。
        [inisi_number[i], inisi_number[j]] = [inisi_number[j], inisi_number[i]];
    }
    return inisi_number;
}
function senti_shuffle(senti_number) //lengthで文字列が何個あるかを取得してる
{
    for(let i = senti_number.length -1; i>0; i--){
        const j = Math.floor(Math.random() * (i + 1)); 
        //Math.floor()で小数点以下切り捨て整数に
        //Math.randomで0以上1未満のランダムな小数を返す
        //Math.random() * (i + 1) によって、0以上j以下iの範囲でランダムな整数 j を生成します。
        [senti_number[i], senti_number[j]] = [senti_number[j], senti_number[i]];
    }
    return senti_number;
}
function cont_shuffle(cont_number) //lengthで文字列が何個あるかを取得してる
{
    for(let i = cont_number.length -1; i>0; i--){
        const j = Math.floor(Math.random() * (i + 1)); 
        //Math.floor()で小数点以下切り捨て整数に
        //Math.randomで0以上1未満のランダムな小数を返す
        //Math.random() * (i + 1) によって、0以上j以下iの範囲でランダムな整数 j を生成します。
        [cont_number[i], cont_number[j]] = [cont_number[j], cont_number[i]];
    }
    return cont_number;
}

function each_roll()
{
    let roll = document.getElementById('each_roll').value;
    let number = 1;
    while(roll > number -1)
    {
        let parent = document.getElementById('roll_text');

        let br = document.createElement('br');

        let label = document.createElement('label');
        label.textContent = number + '人目の名前を入力　　　　';

        let input = document.createElement('input');
        input.id = 'rollid' + number;
        input.type = 'text';

        parent.appendChild(br);
        parent.appendChild(label);
        parent.appendChild(input);
        number++;
    }
    let send = document.getElementById('each_roll_send');
    let decide = document.getElementById('each_roll_decide');
    send.style.display = 'none';
    decide.style.display = 'inline';
}
function decide_roll_()
{
    let number = document.getElementById('each_roll').value;
    let menber = 1;

    let decide = document.getElementById('each_roll_decide');
    let random = document.getElementById('each_roll_random');
    while(number > menber -1)
    {
        let name = document.getElementById('rollid' + menber).value; 
        let parent = document.getElementById('roll_name');

        let name_ = document.createElement('div');
        name_.classList.add('text');
        name_.id = 'roll_id' + menber;
        name_.innerText = name + '　　';
        parent.appendChild(name_);

        menber++;
    }
    let free_parent = document.getElementById('free');
    free_parent.innerText = '自由枠あり';
    let free = document.createElement('input');
    free.type = "checkbox";
    free.id = 'free_check';
    free_parent.appendChild(free);

    decide.style.display = 'none';
    random.style.display = 'inline';
}

function each_roll_random()
{
    let checkbox = document.getElementById("free_check");
    let menber = document.getElementById('each_roll').value;
    let number = 1;

    if(checkbox.checked)
    {
        decide_roll_shaffule.push('自由枠!　');
    }

    role_shuffle();
    while(menber > number -1)
    {
        let role = decide_roll_shaffule[number -1];

        let div = document.createElement('div');
        div.id = '_roll_' + number;
        let parent = document.getElementById('roll_id' + number);
        parent.appendChild(div);
        div.innerText = role;

        number++;
    }
    console.log(decide_roll_shaffule);
    let random = document.getElementById('each_roll_random');
    let reroll = document.getElementById('each_roll_reroll');
    random.style.display = 'none';
    reroll.style.display = 'inline';
}

function each_reroll()
{
    let number = 1;
    let menber = document.getElementById('each_roll').value;
    let checkbox = document.getElementById("free_check");

    if(checkbox.checked && !decide_roll_shaffule.includes('自由枠!　'))
    {
        decide_roll_shaffule.push('自由枠!　');
        while(menber > number-1)
    {
        let role = decide_roll_shaffule[number -1];
        let text = document.getElementById('_roll_' + number);
        text.innerText = "";
        text.innerText = role;

        number++;
    }
        console.log(decide_roll_shaffule);
    }else if(!checkbox.checked && decide_roll_shaffule.includes('自由枠!　'))
    {
         decide_roll_shaffule = decide_roll_shaffule.filter(role => role !== '自由枠!　');
    role_shuffle();
    while(menber > number-1)
    {
        let role = decide_roll_shaffule[number -1];
        let text = document.getElementById('_roll_' + number);
        text.innerText = "";
        text.innerText = role;

        number++;
    }
    }else
    {
        role_shuffle();
    while(menber > number-1)
    {
        let role = decide_roll_shaffule[number -1];
        let text = document.getElementById('_roll_' + number);
        text.innerText = "";
        text.innerText = role;

        number++;
    }
    }
        console.log(decide_roll_shaffule);

}

function role_shuffle() //lengthで文字列が何個あるかを取得してる
{
    for(let i = decide_roll_shaffule.length -1; i>0; i--){
        const j = Math.floor(Math.random() * (i + 1)); 
        //Math.floor()で小数点以下切り捨て整数に
        //Math.randomで0以上1未満のランダムな小数を返す
        //Math.random() * (i + 1) によって、0以上j以下iの範囲でランダムな整数 j を生成します。
        [decide_roll_shaffule[i], decide_roll_shaffule[j]] = [decide_roll_shaffule[j], decide_roll_shaffule[i]];
    }
    return decide_roll_shaffule;
}

function ban_pushButton()
{
    const ban_send = document.getElementById('ban_send');
    const ban_error = document.getElementById('ban_error');
    const ban_decide = document.getElementById('ban_decide');
    let ban_menber = document.getElementById('ban_number').value;
    let menber = 1;

    if(ban_menber !== '')
    {
        ban_send.style.display = 'none';
        ban_error.style.display = 'none';
        ban_decide.style.display = 'inline';
        while(ban_menber > menber -1)
        {
        let br = document.createElement('br');
        let parent = document.getElementById('ban_menber');
        let ban_name = document.createElement('label');
        ban_name.textContent = menber + '人目の名前を入力　　　';

        let input = document.createElement('input');
        input.id = 'ban_id' + menber;

        parent.appendChild(br);
        parent.appendChild(ban_name);
        parent.appendChild(input);

        menber++;
        }
        let chara = document.getElementById('chara');
    let roll_check = document.getElementById('roll_check');

    let input_chara = document.createElement('input');
    let input_roll = document.createElement('input');

    chara.innerText = 'キャラ選択';
    roll_check.innerText = 'ロール選択';

    chara.appendChild(input_chara);
    input_chara.type = 'checkbox';
    input_chara.id = 'chara_check';

    roll_check.appendChild(input_roll);
    input_roll.type ='checkbox';
    input_roll.id = 'input_roll';


    }else
    {
        ban_error.style.display = 'inline';
    }
}
function ban_decideButton()
{    
    let picture = 0;
    let menber = 1;
    let ban_number = document.getElementById('ban_number').value;
    let ban_men = document.getElementById('ban_men');
    let chara = document.getElementById('chara_check');
    let input_roll = document.getElementById('input_roll');

    let chara_error = document.getElementById('chara_error');
    let decide = document.getElementById('ban_decide');
    let random = document.getElementById('ban_random');
    let ban_img = document.getElementById('ban_img');

    while(ban_number > menber -1)
    {
        let ban_menber = document.getElementById('ban_id' + menber).value;
        let menber_ = document.createElement('div');
        menber_.textContent = ban_menber;
        menber_.id = 'Idban' + menber;
        menber_.classList.add('text');
        ban_men.appendChild(menber_);

        if(input_roll.checked && !chara.checked)
        {
        let parent = document.getElementById('Idban' + menber);
        let select = document.createElement('select');
        select.id = 'select' + menber;


        let dhue_option = document.createElement('option');
        dhue_option.innerText = 'デュエリスト';
        dhue_option.value = 'デュエリスト';

        let inisi_option = document.createElement('option');
        inisi_option.innerText = 'イニシエーター';
        inisi_option.value = 'イニシエーター';

        let senti_option = document.createElement('option');
        senti_option.innerText = 'センチネル';
        senti_option.value = 'センチネル';

        let cont_option = document.createElement('option');
        cont_option.innerText = 'コントローラー';
        cont_option.value = 'コントローラー';

        parent.appendChild(select);
        select.appendChild(dhue_option);
        select.appendChild(inisi_option);
        select.appendChild(senti_option);
        select.appendChild(cont_option);

        let label = document.createElement('label');
        let text = document.getElementById('ban_id' + menber).value;
        ban_img.appendChild(label);
        label.innerText = text;
        label.id = 'ban_name' + menber;
        label.classList.add('text');

        decide.style.display = 'none';
        random.style.display = 'inline';
        }

        if(chara.checked && !input_roll.checked)
        {
            let parent = document.getElementById('Idban' + menber);
            let select = document.createElement('select');
            select.id = 'select' + menber;

            let jett = document.createElement('option');
            jett.innerText = 'ジェット';
            jett.value = 'https://appmedia.jp/wp-content/uploads/2024/10/102450_urswg.webp';

            let feni = document.createElement('option');
            feni.innerText = 'フェニックス';
            feni.value = 'https://appmedia.jp/wp-content/uploads/2024/10/102451_n4wda.webp';

            let neon = document.createElement('option');
            neon.innerText = 'ネオン';
            neon.value ='https://appmedia.jp/wp-content/uploads/2024/10/102451_axmlk.webp';
    
            let yoru = document.createElement('option');
            yoru.innerText = 'ヨル';
            yoru.value ='https://appmedia.jp/wp-content/uploads/2024/10/102451_3lupz.webp';

            let reizu = document.createElement('option');
            reizu.innerText = 'レイズ';
            reizu.value ='https://appmedia.jp/wp-content/uploads/2024/10/102451_8lwo4.webp';

            let reina = document.createElement('option');
            reina.innerText = 'レイナ';
            reina.value ='https://appmedia.jp/wp-content/uploads/2024/10/102451_a3jmc.webp';

            let aiso = document.createElement('option');
            aiso.innerText = 'アイソ';
            aiso.value ='https://appmedia.jp/wp-content/uploads/2024/10/102452_ltq0o.webp';

            let weirei = document.createElement('option');
            weirei.innerText = 'ウェイレイ';
            weirei.value ='https://appmedia.jp/wp-content/uploads/2023/06/101811_9esu4.webp';
        
            let sova = document.createElement('option');
            sova.innerText = 'ソーヴァ';
            sova.value ='https://appmedia.jp/wp-content/uploads/2024/10/102452_kawcj.webp';

            let kayo = document.createElement('option');
            kayo.innerText = 'KAY/O';
            kayo.value = 'https://appmedia.jp/wp-content/uploads/2024/10/102452_qhcgd.webp';

            let sky = document.createElement('option');
            sky.innerText = 'スカイ';
            sky.value = 'https://appmedia.jp/wp-content/uploads/2024/10/102452_n05kl.webp';

            let feid = document.createElement('option');
            feid.innerText = 'フェイド';
            feid.value = 'https://appmedia.jp/wp-content/uploads/2024/10/102452_gjwef.webp';

            let buriti = document.createElement('option');
            buriti.innerText = 'ブリーチ';
            buriti.value ='https://appmedia.jp/wp-content/uploads/2024/10/102453_zlbdp.webp';

            let gekko = document.createElement('option');
            gekko.innerText = 'ゲッコー';
            gekko.value = 'https://appmedia.jp/wp-content/uploads/2024/10/102452_wejd5.webp';

            let teho = document.createElement('option');
            teho.innerText = 'テホ';
            teho.value = 'https://appmedia.jp/wp-content/uploads/2025/01/104157_byjz0.webp';

            let sage = document.createElement('option');
            sage.innerText = 'セージ';
            sage.value = 'https://appmedia.jp/wp-content/uploads/2024/10/102454_djghe.webp';

            let killjoy = document.createElement('option');
            killjoy.innerText = 'キルジョイ';
            killjoy.value = 'https://appmedia.jp/wp-content/uploads/2024/10/102454_yjxc1.webp';

            let saifa = document.createElement('option');
            saifa.innerText = 'サイファー';
            saifa.value = 'https://appmedia.jp/wp-content/uploads/2024/10/102454_pdiuz.webp';

            let tyenb = document.createElement('option');
            tyenb.innerText = 'チェンバー';
            tyenb.value = 'https://appmedia.jp/wp-content/uploads/2024/10/102454_j0xzl.webp';

            let deadrock = document.createElement('option');
            deadrock.innerText = 'デッドロック';
            deadrock.value = 'https://appmedia.jp/wp-content/uploads/2024/10/102455_uevjn.webp';

            let vais = document.createElement('option');
            vais.innerText = 'ヴァイス';
            vais.value = 'https://appmedia.jp/wp-content/uploads/2024/09/120938_ac05l.webp';

            let brim = document.createElement('option');
            brim.innerText = 'ブリムストーン';
            brim.value = 'https://appmedia.jp/wp-content/uploads/2024/10/102454_7l3dv.webp';

            let astra = document.createElement('option');
            astra.innerText = 'アストラ';
            astra.value = 'https://appmedia.jp/wp-content/uploads/2024/10/102453_15fkt.webp';

            let vaipa = document.createElement('option');
            vaipa.innerText = 'ヴァイパー';
            vaipa.value = 'https://appmedia.jp/wp-content/uploads/2024/10/102453_dqika.webp';

            let omen = document.createElement('option');
            omen.innerText = 'オーメン';
            omen.value = 'https://appmedia.jp/wp-content/uploads/2024/10/102453_87ag3.webp';

            let haba = document.createElement('option');
            haba.innerText = 'ハーバー';
            haba.value = 'https://appmedia.jp/wp-content/uploads/2024/10/102454_ua8fj.webp';

            let kurov = document.createElement('option');
            kurov.innerText = 'クローヴ';
            kurov.value = 'https://appmedia.jp/wp-content/uploads/2024/10/102453_r6kd3.webp';

            parent.appendChild(select);
            select.appendChild(jett);
            select.appendChild(feni);
            select.appendChild(neon);
            select.appendChild(yoru);
            select.appendChild(reizu);
            select.appendChild(reina);
            select.appendChild(aiso);
            select.appendChild(weirei);
            select.appendChild(sova);
            select.appendChild(kayo);
            select.appendChild(sky);
            select.appendChild(feid);
            select.appendChild(buriti);
            select.appendChild(gekko);
            select.appendChild(teho);
            select.appendChild(sage);
            select.appendChild(killjoy);
            select.appendChild(saifa);
            select.appendChild(tyenb);
            select.appendChild(deadrock);
            select.appendChild(vais);
            select.appendChild(brim);
            select.appendChild(astra);
            select.appendChild(vaipa);
            select.appendChild(omen);
            select.appendChild(haba);
            select.appendChild(kurov);

            let label = document.createElement('label');
            let text = document.getElementById('ban_id' + menber).value;
            ban_img.appendChild(label);
            label.innerText = text;
            label.id = 'ban_name' + menber;
            label.classList.add('text');

            decide.style.display = 'none';
            random.style.display = 'inline';
        }
        
        if(chara.checked && input_roll.checked)
        {
            chara_error.style.display = 'inline';
        }

        menber++;

    }
    if(!chara.checked && !input_roll.checked)
    {
        chara_error.style.display = 'inline';

    }
}

function ban_randomButton()
{
    let remove = 0;
    let number = 1;
    let menber = document.getElementById('ban_number').value;

    let check_chara = document.getElementById('chara_check');
    let check_roll = document.getElementById('input_roll');

    let random = document.getElementById('ban_random');
    let reroll = document.getElementById('ban_reroll');

    while(menber > number -1)
    {
        let select = document.getElementById('select' + number);
        let select_value = select.value;

        let parent = document.getElementById('ban_name' + number);
        let img = document.createElement('img');
        parent.appendChild(img);
        if(check_chara.checked)
        {       
            ban_chara_shuffle(down_chara);
            new_img = down_chara.filter(img => !img.includes(select_value));
            img.src = new_img[number -1];   
            img.classList.add('picture');
            img.id = 'picture' + number;
        }
        if(check_roll.checked)
        {
            if(select_value == 'デュエリスト')
            {
                let dhue_number = [2,3,4];

                let none_dhue = down_roll.filter(down_roll => dhue_number.includes(down_roll.id));
                ban_dhue_shuffle(none_dhue);

                img.src = none_dhue[number - 1].img;
                img.classList.add('picture');
                img.id = 'picture' + number;
            }
        }
        if(check_roll.checked)
        {
            if(select_value == 'イニシエーター')
            {
                let inisi_number = [1,3,4];

                let none_inisi = down_roll.filter(down_roll => inisi_number.includes(down_roll.id));
                ban_inisi_shuffle(none_inisi);

                img.src = none_inisi[number - 1].img;
                img.classList.add('picture');
                img.id = 'picture' + number;
            }
        }
        if(check_roll.checked)
        {
            if(select_value == 'センチネル')
            {
                let senti_number = [1,2,4];

                let none_senti = down_roll.filter(down_roll => senti_number.includes(down_roll.id));
                ban_senti_shuffle(none_senti);

                img.src = none_senti[number - 1].img;
                img.classList.add('picture');
                img.id = 'picture' + number;
            }
        }
        if(check_roll.checked)
        {
            if(select_value == 'コントローラー')
            {
                let cont_number = [1,2,3];

                let none_cont = down_roll.filter(down_roll => cont_number.includes(down_roll.id));
                ban_cont_shuffle(none_cont);

                img.src = none_cont[number - 1].img;
                img.classList.add('picture');
                img.id = 'picture' + number;
            }
        }
        let picture = document.getElementById('picture' + number).src;
        remove_picture.push(picture);

        console.log(remove_picture)

        random.style.display = 'none';
        reroll.style.display = 'inline';
        number++;
    }
    if(hasDuplicates(remove_picture))
    {
        ban_rerollButton();
    }
}

function hasDuplicates(array) {
  return new Set(array).size !== array.length;
}

function ban_rerollButton()
{
    let menber = 1;
    let menber_ = document.getElementById('ban_number').value;
    remove_picture.length = 0;

    while(menber_ > menber -1)
    {
        let picture = document.getElementById('picture' + menber);
        picture.remove();

        menber++;
    }
    ban_randomButton();
}

function ban_roll_shuffle(down_roll)
{
    for(let i = down_roll.length -1; i>0; i--){
        const j = Math.floor(Math.random() * (i + 1)); 
        //Math.floor()で小数点以下切り捨て整数に
        //Math.randomで0以上1未満のランダムな小数を返す
        //Math.random() * (i + 1) によって、0以上j以下iの範囲でランダムな整数 j を生成します。
        [down_roll[i], down_roll[j]] = [down_roll[j], down_roll[i]];
    }
    return down_roll;
}

function ban_chara_shuffle(down_chara) //lengthで文字列が何個あるかを取得してる
{
    for(let i = down_chara.length -1; i>0; i--){
        const j = Math.floor(Math.random() * (i + 1)); 
        //Math.floor()で小数点以下切り捨て整数に
        //Math.randomで0以上1未満のランダムな小数を返す
        //Math.random() * (i + 1) によって、0以上j以下iの範囲でランダムな整数 j を生成します。
        [down_chara[i], down_chara[j]] = [down_chara[j], down_chara[i]];
    }
    return down_chara;
}

function ban_dhue_shuffle(none_dhue)
{
    for(let i = none_dhue.length -1; i>0; i--){
        const j = Math.floor(Math.random() * (i + 1)); 
        //Math.floor()で小数点以下切り捨て整数に
        //Math.randomで0以上1未満のランダムな小数を返す
        //Math.random() * (i + 1) によって、0以上j以下iの範囲でランダムな整数 j を生成します。
        [none_dhue[i], none_dhue[j]] = [none_dhue[j], none_dhue[i]];
    }
    return none_dhue;
}
function ban_inisi_shuffle(none_inisi)
{
    for(let i = none_inisi.length -1; i>0; i--){
        const j = Math.floor(Math.random() * (i + 1)); 
        //Math.floor()で小数点以下切り捨て整数に
        //Math.randomで0以上1未満のランダムな小数を返す
        //Math.random() * (i + 1) によって、0以上j以下iの範囲でランダムな整数 j を生成します。
        [none_inisi[i], none_inisi[j]] = [none_inisi[j], none_inisi[i]];
    }
    return none_inisi;
}
function ban_senti_shuffle(none_senti)
{
    for(let i = none_senti.length -1; i>0; i--){
        const j = Math.floor(Math.random() * (i + 1)); 
        //Math.floor()で小数点以下切り捨て整数に
        //Math.randomで0以上1未満のランダムな小数を返す
        //Math.random() * (i + 1) によって、0以上j以下iの範囲でランダムな整数 j を生成します。
        [none_senti[i], none_senti[j]] = [none_senti[j], none_senti[i]];
    }
    return none_senti;
}
function ban_senti_shuffle(none_cont)
{
    for(let i = none_cont.length -1; i>0; i--){
        const j = Math.floor(Math.random() * (i + 1)); 
        //Math.floor()で小数点以下切り捨て整数に
        //Math.randomで0以上1未満のランダムな小数を返す
        //Math.random() * (i + 1) によって、0以上j以下iの範囲でランダムな整数 j を生成します。
        [none_cont[i], none_cont[j]] = [none_cont[j], none_cont[i]];
    }
    return none_cont;
}
