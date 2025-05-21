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

];

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

const role = [
    'デュエリスト',
    'イニシエーター',
    'センチネル',
    'コントローラー',
]

function pushButton()
{
    let $menber_number = document.getElementById('menber_').value; //値が欲しい場合はvalueを追加 https://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q12166934472
    const errorMessage = document.getElementById('error');

    if($menber_number !== '') //テキストの中身が空白の時を言いたい場合nullじゃなくて''を使う
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
    let numberIndex = 1;
    let name = document.getElementById('ID' + numberIndex).value;

    if(name === '')
    {
        errorMessage.style.display = 'block';
    }else
    {
        errorMessage.style.display = 'none';
         while(numberIndex - 1 < $menber_number){
        let name = document.getElementById('ID' + numberIndex).value;
        if(name !== '')
        {
            let parent_name = document.getElementById('name');

            let elementId = document.createElement('div'); //https://posipan.com/add-remove-id-class/
            elementId.id = 'id' + numberIndex;
            elementId.innerText = name;
            elementId.classList.add('text');
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
function decide_roll()
{
    let number = document.getElementById('each_roll').value;
    let menber_ = document.getElementById('roll_text');
    let menber = 1;

    let decide = document.getElementById('each_roll_decide');
    let random = document.getElementById('each_roll_random');
    while(number > menber -1)
    {
        let name = document.getElementById('rollid' + menber).value; 

        let form = document.createElement('form');
        form.id = 'roll' + menber;
        menber_.appendChild(form)

        let name_ = document.createElement('div');
        name_.classList.add('text');
        form.appendChild(name_);
        name_.innerText = name;

        let dhue_l = document.createElement('label');
        dhue_l.innerText = 'デュエリスト';
        form.appendChild(dhue_l);

        let dhue = document.createElement('input');
        dhue.type = 'checkbox';
        dhue.id = 'check_roll';
        form.appendChild(dhue);


        let inisi_l = document.createElement('label');
        inisi_l.innerText = 'イニシエーター';
        form.appendChild(inisi_l);

        let inisi = document.createElement('input');
        inisi.type = 'checkbox';
        inisi.id = 'check_roll';
        form.appendChild(inisi);

        let senti_l = document.createElement('label');
        senti_l.innerText = 'センチネル';
        form.appendChild(senti_l);

        let senti = document.createElement('input');
        senti.type='checkbox';
        senti.id = 'check_roll';
        form.appendChild(senti);

        let cont_l = document.createElement('label');
        cont_l.innerText = 'コントローラー';
        form.appendChild(cont_l);

        let cont = document.createElement('input');
        cont.type = 'checkbox';
        cont.id = 'check_roll';
       form.appendChild(cont);
        menber++;
    }
    let free_parent = document.getElementById('free');
    free_parent.innerText = '自由枠あり';
    let free = document.createElement('input');
    free.type = 'checkbox';
    free_parent.appendChild(free);

    decide.style.display = 'none';
    random.style.display = 'inline';
}

function each_roll_random()
{
    let menber = 1;
    let number = document.getElementById('each_roll').value;
    let checkboxes = document.querySelectorAll('input[id="check_roll"]:checked');

    while(number > menber -1)
    {
        menber++;
    }
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
    }else
    {
        ban_error.style.display = 'inline';
    }
}
function ban_decideButton()
{    
    let menber = 1;
    let ban_men = document.getElementById('ban_men');
    let ban_number = document.getElementById('ban_number').value;
    while(ban_number > menber -1)
    {
        let ban_menber = document.getElementById('ban_id' + menber).value;
        let menber_ = document.createElement('div');
        menber_.textContent = ban_menber;
        menber_.id = 'Id' + menber;
        menber_.classList.add('text');
        ban_men.appendChild(menber_);
        menber++;

    }
}
