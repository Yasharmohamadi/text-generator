const $ = document;
const btnElem = $.querySelector('.btn');
const inputElem = $.querySelector('.input');
const pParentElem = $.querySelector('.left_genarator');
let paragraphs = ['متن تستی ساز نوژه متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.'];

function btnClickHandler() {
    let userNumber = inputElem.value;
    
    for(let i = 0; i < userNumber; i++){
        let newTextElem = $.createElement('p');
        newTextElem.classList.add('test_text');
        newTextElem.innerHTML = paragraphs;
        newTextElem.addEventListener('click', function() {
            newTextElem.remove();
        })

        pParentElem.append(newTextElem);
    }
    
    console.log('test');
};

btnElem.addEventListener('click', btnClickHandler);