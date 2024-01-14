
import './App.css';
import useState from 'react-usestateref'
import "react-alice-carousel/lib/alice-carousel.css";
import $ from 'jquery'
import video from './content/video.mp4'
import { Carousel22 } from './js/ButtonGroups';
import { useEffect } from 'react';
import { Gallery } from './js/Carousel';
import { Gallery1 } from './js/Carousel1';
function App() {
  // const [video,setvideo,setvideoRef] = useState('https://vod.fl.freecaster.net/vod/kenzo/o5zgqb5ZHd_720p.mp4')

  const items3 = [
    <div class="vemotau-vokusipol"><div class="testimonial"><img src="http://zornet.ru/_fr/83/7890600.jpg" alt=""/><div class="gecedanam">Антон Попов</div><div class="apogered-gselected"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div><p>Здесь первое описание. Продолжение.</p></div></div>,
    <div class="vemotau-vokusipol"><div class="testimonial"><img src="http://zornet.ru/_fr/83/2047084.jpg" alt=""/><div class="gecedanam">Дмитрий Атрохов</div><div class="apogered-gselected"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i></div><p>Второй отзыв. Его продолжение.</p></div></div>,
<div class="vemotau-vokusipol"><div class="testimonial"><img src="http://zornet.ru/_fr/83/5640570.jpg" alt=""/><div class="gecedanam">Каспер Волков</div><div class="apogered-gselected"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i></div><p>Здесь первое описание. Продолжение.</p></div></div>,

      ]


  
  const items2 = [
<img src='https://static3.tildacdn.com/tild3033-3462-4563-a562-653061303064/rr32_1.png'/> ,
<img src='https://static3.tildacdn.com/tild6535-3539-4165-b466-656338663630/--1.png'/> ,
<img src='https://static3.tildacdn.com/tild3465-3135-4831-b834-653264346334/--2.png'/> ,
<img src='https://static3.tildacdn.com/tild3033-3462-4563-a562-653061303064/rr32_1.png'/> ,
  ]
  const items1 = [
<div class='carousel_'>
    <div class='carousel_cont'>
      <div class='carousel_width'>
      <img class='carousel_img' src='https://static3.tildacdn.com/tild3966-3331-4432-a234-353232363061/7c6f5858a967f945e5d3.jpg' alt="BMW RX-5 2023" loading="lazy" width="440" height="300"/>
      </div>
      <div class='carousel_width color_2'>
       <div class='carousel_title'>
     <strong class='color'>Smas-лифтинг от 3 500₽ | </strong>   Омоложение и подтянутая кожа без операций
       </div>
       <div class='carousel_text color_2'>
       <strong class='color'>  Авторский комплекс включает в себя большой спектр различных процедур. </strong>  Это инновационные методы омоложения, которые позволяют моментально освежить лицо, избавиться от усталого вида и вернуть упругость кожи.
       </div>
       <div class='carousel_text color_2'>
       <strong class='color'>  Авторский комплекс включает в себя большой спектр различных процедур. </strong>  Это инновационные методы омоложения, которые позволяют моментально освежить лицо, избавиться от усталого вида и вернуть упругость кожи.
       </div>
       <div  class='carousel_buttom bg_color color_bg'>
        Записаться 
       </div>
      </div>
    </div>
    </div>,


<div class='carousel_'>
    <div class='carousel_cont'>
      <div class='carousel_width'>
      <img class='carousel_img'  src='https://static3.tildacdn.com/tild3966-3331-4432-a234-353232363061/7c6f5858a967f945e5d3.jpg' alt="BMW RX-5 2023" loading="lazy" width="440" height="300"/>
      </div>
      <div class='carousel_width'>
       <div class='carousel_title'>
       Smas-лифтинг от 3 500₽ | Омоложение и подтянутая кожа без операций
       </div>
       <div class='carousel_text'>
       Авторский комплекс включает в себя большой спектр различных процедур. Это инновационные методы омоложения, которые позволяют моментально освежить лицо, избавиться от усталого вида и вернуть упругость кожи.
       </div>
       <div class='carousel_buttom'>
        Записаться 
       </div>
      </div>
    </div>
    </div>,


<div class='carousel_'>
    <div class='carousel_cont'>
      <div class='carousel_width'>
      <img class='carousel_img'  src='https://static3.tildacdn.com/tild3966-3331-4432-a234-353232363061/7c6f5858a967f945e5d3.jpg' alt="BMW RX-5 2023" loading="lazy" width="440" height="300"/>
      </div>
      <div class='carousel_width'>
       <div class='carousel_title'>
       Smas-лифтинг от 3 500₽ | Омоложение и подтянутая кожа без операций
       </div>
       <div class='carousel_text'>
       Авторский комплекс включает в себя большой спектр различных процедур. Это инновационные методы омоложения, которые позволяют моментально освежить лицо, избавиться от усталого вида и вернуть упругость кожи.
       </div>
       <div class='carousel_buttom'>
        Записаться 
       </div>
      </div>
    </div>
    </div>,

  ];
  return (
    <div className="App">
        <div class='nav'> 
        <div class='width_33'>
        <div class='nav_content'>
          <div class='d_flex_'>
          <svg xmlns="http://www.w3.org/2000/svg" class='svg_w'  viewBox="0 0 18 18" fill="none">
<path d="M10.6622 4.1746C11.4408 4.32584 12.1565 4.70496 12.7174 5.26344C13.2784 5.82191 13.6592 6.53433 13.8112 7.30952M10.6622 1C12.2799 1.17892 13.7885 1.90014 14.9402 3.04524C16.0919 4.19035 16.8182 5.69127 17 7.30158M7.61442 10.4151C6.65651 9.46149 5.90013 8.38321 5.34527 7.23271C5.29754 7.13375 5.27368 7.08427 5.25535 7.02166C5.19019 6.79916 5.23699 6.52594 5.37253 6.3375C5.41067 6.28448 5.45623 6.23912 5.54736 6.14839C5.82607 5.87093 5.96543 5.73219 6.05654 5.59269C6.40013 5.06658 6.40013 4.38835 6.05654 3.86224C5.96543 3.72274 5.82607 3.58401 5.54736 3.30654L5.39201 3.15188C4.96834 2.7301 4.7565 2.51921 4.52899 2.40465C4.07653 2.17682 3.54219 2.17682 3.08972 2.40465C2.86221 2.51921 2.65038 2.7301 2.2267 3.15188L2.10104 3.27699C1.67881 3.69732 1.4677 3.90749 1.30647 4.19323C1.12756 4.5103 0.99892 5.00275 1.00001 5.36642C1.00099 5.69416 1.06485 5.91814 1.19256 6.36611C1.87894 8.77357 3.17399 11.0453 5.07771 12.9405C6.98143 14.8357 9.26334 16.125 11.6816 16.8083C12.1316 16.9354 12.3566 16.999 12.6858 17C13.0511 17.0011 13.5457 16.873 13.8642 16.6949C14.1512 16.5344 14.3624 16.3242 14.7846 15.9039L14.9102 15.7788C15.3339 15.357 15.5458 15.1461 15.6608 14.9196C15.8897 14.4692 15.8897 13.9372 15.6608 13.4868C15.5458 13.2603 15.3339 13.0494 14.9102 12.6276L14.7549 12.4729C14.4762 12.1955 14.3368 12.0568 14.1967 11.966C13.6682 11.624 12.987 11.624 12.4585 11.966C12.3184 12.0568 12.179 12.1955 11.9003 12.4729C11.8092 12.5637 11.7636 12.609 11.7103 12.647C11.5211 12.7819 11.2466 12.8285 11.0231 12.7637C10.9602 12.7454 10.9105 12.7217 10.8111 12.6741C9.65546 12.1218 8.57233 11.3688 7.61442 10.4151Z" stroke="#292929" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>  
<div class='nav_content_text fs_'>
 +7 495 228 00 54
 </div>
          </div>

          <div class='d_flex_'>
          <svg  class='svg_w'  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="3 3 19.48 18">
<path d="M18.4721 16.7023C17.3398 18.2608 15.6831 19.3584 13.8064 19.7934C11.9297 20.2284 9.95909 19.9716 8.25656 19.0701C6.55404 18.1687 5.23397 16.6832 4.53889 14.8865C3.84381 13.0898 3.82039 11.1027 4.47295 9.2901C5.12551 7.47754 6.41021 5.96134 8.09103 5.02003C9.77184 4.07873 11.7359 3.77556 13.6223 4.16622C15.5087 4.55688 17.1908 5.61512 18.3596 7.14654C19.5283 8.67796 20.1052 10.5797 19.9842 12.5023M19.9842 12.5023L21.4842 11.0023M19.9842 12.5023L18.4842 11.0023" stroke="#292929" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 8V12L15 15" stroke="#292929" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<div class='nav_content_text fs_'>
 <div class='text__'>ежедневно с </div>  <div> 9:00 до 22:00</div>
          </div>
          </div>
        </div>
        </div>

<div class='width_33'>
        <img src='https://psv4.userapi.com/c909618/u210034432/docs/d33/7d376e635734/NhtnVlqdpgI_1.png?extra=lJ0XqlTn42wGA_ydxE_BoL6ISrniSz_ZqHpIhnMNSYV5UhpZrtEMkx_6C7Ya7Y2NPZ9qKkK_H5f7jweIOL_NRx-q-iN1fXps9EbiLxkMGh3GXKM7PGVe9XKGBGSEr67sPMsSxegbeQpi4PSJaEtZ-eh0QQ' class='h_100'/>
        </div>


        <div class='width_33 wi'>
        <svg data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" class="stroke icon icon-hamburger" width="20px" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" viewBox="0 0 18 16"><path d="M1 .5a.5.5 0 100 1h15.71a.5.5 0 000-1H1zM.5 8a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1A.5.5 0 01.5 8zm0 7a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1a.5.5 0 01-.5-.5z" fill="currentColor"></path></svg>
          </div>

        </div>
      <div className="container_video">
        <div class='opacity'
      >   <div class='video_text'>
      Подарите себе любовь и заботу
      <div >
      а мы Вам в этом поможем!
      </div>
      </div>
      <div class="but_1 "><a href="/" class="ddott ml-5 ">Акции</a>  <a href="/" class="ddott ml-5 ">Предложения</a></div>
      <video class='video2'  src={video} loop  autoplay='true' muted='true'>
   </video>
   </div>
   </div>
   <section class="section features">
    <div class="container">
      <div class="features__body">
        <div class="row g-5">
          <div class="col-12 col-xl-6">
            <div class="features__item">
              <noscript><img src="https://mdclinica.ru/wp-content/uploads/2023/02/1.svg" alt="" class="features__item-image" data-aos="fade-up" data-aos-delay="0"/></noscript><img src="https://mdclinica.ru/wp-content/uploads/2023/02/1.svg" data-src="https://mdclinica.ru/wp-content/uploads/2023/02/1.svg" alt="" class="features__item-image aos-init lazyloaded aos-animate" data-aos="fade-up" data-aos-delay="0"/>
              <div class="features__item-content">
                <div class="features__item-title aos-init aos-animate" data-aos="fade-left" data-aos-delay="0"> Удобно</div>
                <div class="features__item-text aos-init aos-animate" data-aos="fade-left" data-aos-delay="100"> Наша клиника находится в самом центре города</div>
              </div>
            </div>
          </div>
          <div class="col-12 col-xl-6">
            <div class="features__item">
              <noscript><img src="https://mdclinica.ru/wp-content/uploads/2023/02/2.svg" alt="" class="features__item-image" data-aos="fade-up" data-aos-delay="100"/></noscript><img src="https://mdclinica.ru/wp-content/uploads/2023/02/2.svg" data-src="https://mdclinica.ru/wp-content/uploads/2023/02/2.svg" alt="" class="features__item-image aos-init lazyloaded aos-animate" data-aos="fade-up" data-aos-delay="100"/>
              <div class="features__item-content">
                <div class="features__item-title aos-init aos-animate" data-aos="fade-left" data-aos-delay="100"> Абонемент</div>
                <div class="features__item-text aos-init aos-animate" data-aos="fade-left" data-aos-delay="200"> Удобные программы и абонементы для вашей экономии</div>
              </div>
            </div>
          </div>
          <div class="col-12 col-xl-6">
            <div class="features__item">
              <noscript><img src="https://mdclinica.ru/wp-content/uploads/2023/02/4.svg" alt="" class="features__item-image" data-aos="fade-up" data-aos-delay="200"/></noscript><img src="https://mdclinica.ru/wp-content/uploads/2023/02/4.svg" data-src="https://mdclinica.ru/wp-content/uploads/2023/02/4.svg" alt="" class="features__item-image aos-init lazyloaded aos-animate" data-aos="fade-up" data-aos-delay="200"/>
              <div class="features__item-content">
                <div class="features__item-title aos-init aos-animate" data-aos="fade-left" data-aos-delay="100"> Абонемент</div>
                <div class="features__item-text aos-init aos-animate" data-aos="fade-left" data-aos-delay="200"> Удобные программы и абонементы для вашей экономии</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>

  <section class="section mission">
    <div class="container">
    <div class='horizontal_line'></div> <h2 class="section__title aos-init aos-animate" data-aos="fade-left">О нас</h2>
      <div class="row mission__body g-3 g-xl-5">
        <div class="col-12 col-xl-5 aos-init aos-animate" data-aos="fade-up">
          <div class="mission__text">
            <p><strong class='color'>MD Beauty Clinic</strong> <div class='color_2'> – это пространство для красоты было основано Викторией Лесиной, косметологом и экспертом по уходу за кожей, как место, где она соединила все передовые и инновационные технологии в области красоты и лучших профессиональных косметологов Москвы.</div></p>
            <p><strong class='color'>MD – Максимум Доверия.</strong> <div class='color_2'>Это первый принцип, которым руководствуется клиника. Безопасность, комфорт, опыт специалистов – все имеет значение. Аппараты клиники имеют сертификаты и лицензии. Команда ежемесячно повышает свою квалификацию. Для нас это дело чести!</div></p>
            <p><strong class='color'>Вся наша команда будет рада видеть Вас в нашей клинике!</strong></p>
          </div>
        </div>
        <div class="col-12 col-xl-7">
          <div class="mission__image aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
            <noscript><img src="https://mdclinica.ru/wp-content/uploads/2023/02/team.jpg" alt="" class=""/></noscript><img src="https://mdclinica.ru/wp-content/uploads/2023/02/team.jpg" data-src="https://mdclinica.ru/wp-content/uploads/2023/02/team.jpg" alt="" class=" lazyloaded"/></div>
        </div>
      </div>
    </div>
  </section>


  <section class="section mission">
    <div class="container">
      <div class='line_flex'>
      <div class='horizontal_line'></div> <h2 class="section__title aos-init aos-animate" data-aos="fade-left">Услуги</h2>
      </div>
       <div class='button_group'>

        <div class='but but_2 '>
          Иньекционная косметология
          </div>
          <div class='but but_3'>
            Уходовая косметика
          </div>
          <div class='but but_4'>
            Обучение косметологии
          </div>
  
        </div>
        <div class='cont_usl'>
        
        <div class='carousel_width'>
          
   <div class='usl_title'>
    <strong class='color'>
   Инъекционная косметология
    </strong>
   </div>

   <div class='usl_text color_2'>
   Передовая область, которая использует инъекции с различными препаратами для коррекции и усовершенствования внешности. Эти процедуры могут включать заполнение морщин, увеличение объема губ, подтяжку кожи и другие инновационные методы для достижения естественного и молодежного вида.
   </div>

 
        </div>

        <div class='carousel_width'>
<img src='https://static3.tildacdn.com/tild3733-6462-4236-b438-303739376364/inektsionnaya-kosmet.jpeg' class='usl_img'/>
        </div>


         </div>
         <div class='cont_but_'>

<div class='but_price'>
<div>Биоревитализация</div>
<div>от 6 500р</div>
</div>

<div class='but_price'>
<div>Биоревитализация</div>
<div>от 6 500р</div>
</div>

<div class='but_price'>
<div>Биоревитализация</div>
<div>от 6 500р</div>
</div>

<div class='but_price'>
<div>Биоревитализация</div>
<div>от 6 500р</div>
</div>

<div class='but_price'>
<div>Биоревитализация</div>
<div>от 6 500р</div>
</div>

<div class='but_price'>
<div>Биоревитализация</div>
<div>от 6 500р</div>
</div>

<div class='but_price'>
<div>Биоревитализация</div>
<div>от 6 500р</div>
</div>

<div class='but_price'>
<div>Биоревитализация</div>
<div>от 6 500р</div>
</div>

<div class='but_price'>
<div>Биоревитализация</div>
<div>от 6 500р</div>
</div>

<div class='but_price'>
<div>Биоревитализация</div>
<div>от 6 500р</div>
</div>
</div>
<div class='but_flex'>
<div class='carousel_buttom zapis bg_color color_bg'>
        Записаться 
       </div>
</div>

      </div>
      </section>


  <section class="section mission">
    <div class="container">
    <div class='horizontal_line'></div>  <h2 class="section__title aos-init aos-animate" data-aos="fade-left">Комплексные предложения</h2>

      <div class='bmw ' link='bmw'>
   <Gallery items1={items1} />
   </div>

      </div>
      </section>


      <section class="section mission">
    <div class="container">
    <div class='horizontal_line'></div> <h2 class="section__title aos-init aos-animate" data-aos="fade-left">Акции</h2>
      <div class="row mission__body g-3 g-xl-5">
      <div class="col-12 col-xl-7">
          <div class="mission__image aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
            <noscript><img src="https://mdclinica.ru/wp-content/uploads/2023/02/team.jpg" alt="" class=""/></noscript><img src="https://mdclinica.ru/wp-content/uploads/2023/02/team.jpg" data-src="https://mdclinica.ru/wp-content/uploads/2023/02/team.jpg" alt="" class=" lazyloaded"/></div>
        </div>
        <div class="col-12 col-xl-5 aos-init aos-animate" data-aos="fade-up">
          <div class="mission__text color_2">
            <p><strong class='color'>MD Beauty Clinic</strong> – это пространство для красоты было основано Викторией Лесиной, косметологом и экспертом по уходу за кожей, как место, где она соединила все передовые и инновационные технологии в области красоты и лучших профессиональных косметологов Москвы.</p>
            <p><strong class='color'>MD – Максимум Доверия.</strong> Это первый принцип, которым руководствуется клиника. Безопасность, комфорт, опыт специалистов – все имеет значение. Аппараты клиники имеют сертификаты и лицензии. Команда ежемесячно повышает свою квалификацию. Для нас это дело чести!</p>
           
        <div class='but_flex'>
<div class='carousel_buttom zapis bg_color color_bg'>
        Записаться 
       </div>
</div>
          </div>
        </div>
 
      </div>
    </div>
  </section>



  <section class="section mission">
    <div class="container">

   
    <div class="koguvcavis-varazdel">
  <div class="sestim-donials">
  <h2 class="section__title aos-init aos-animate" data-aos="fade-left">Отзывы</h2>
  <div class="sectionesag"></div>
  <div class="sagestim-lonials">

  <div class='bmw ' link='bmw'>
   <Gallery1 items1={items3} />
   </div>


  </div>

  </div>
  </div>




    </div>
    </section>


    <section class="section mission">
    <div class="container">
    <div class='horizontal_line'></div> <h2 class="section__title aos-init aos-animate" data-aos="fade-left">Запланировать визит</h2>
    <div class=" ">
   <div class="row d_row">
    <div class="col-md-6 image-section">
      <div class='title_vizit'>
      Вы можете запланировать визит клинику. Выберите время когда вам будет удобно принять обратный звонок для подтверждения записи.
      </div>
     <img class='img_forma' alt="A person holding a smartphone with a medical application on the screen, showing a female doctor's profile." height="400" src="https://static3.tildacdn.com/tild3361-3237-4066-a435-343430623039/smartmockups_ll3sycj.jpg" width="600"/>
    </div>
    <div class="col-md-6">
     <div class="appointment-form">
      <h5>
       Как К Вам можно обращаться?
      </h5>
      <input class="form-control form-control__" placeholder="Имя Фамилия" type="text"/>
      <h5>
       Телефон
      </h5>
      <div class="input-group mb-3">
       <span class="input-group-text" id="basic-addon1">
        +7
       </span>
       <input aria-describedby="basic-addon1" aria-label="Phone" class="form-control form-control_" placeholder="(999) 999-99-99" type="text"/>
      </div>
      <h5>
       Напишите свой вопрос или пожелания
      </h5>
      <textarea class="form-control" rows="3"></textarea>
      <button class="btn btn-submit bord_r">
       ОТПРАВИТЬ ЗАЯВКУ
      </button>
      <p class="form-text">
       Нажимая на кнопку "Оставить заявку", Вы выражаете свое согласие с условиями обработки персональных данных
      </p>
     </div>
    </div>
   </div>
  </div>
    </div>
    </section>




    <section class="section mission">
    <div class="container">
    <div class='horizontal_line'></div> <h2 class="section__title aos-init aos-animate" data-aos="fade-left">Сертификаты</h2>
  
      <div class='bmw ' link='bmw'>
   <Gallery1 items1={items2} />
   </div>

    </div>
    </section>

    <footer class="footer">
      <div class='footer_d'>
      <img class='img_footer' src='https://psv4.userapi.com/c909618/u210034432/docs/d33/7d376e635734/NhtnVlqdpgI_1.png?extra=lJ0XqlTn42wGA_ydxE_BoL6ISrniSz_ZqHpIhnMNSYV5UhpZrtEMkx_6C7Ya7Y2NPZ9qKkK_H5f7jweIOL_NRx-q-iN1fXps9EbiLxkMGh3GXKM7PGVe9XKGBGSEr67sPMsSxegbeQpi4PSJaEtZ-eh0QQ'/>

      </div>

     <div class="container">
      <div class="row">
        <div class="footer-col">
          <h4>Компания</h4>
          <ul>
            <li><a href="#">О нас</a></li>
            <li><a href="#">Услуги</a></li>
            <li><a href="#">Акции</a></li>
            <li><a href="#">Комплексные предложения</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Услуги</h4>
          <ul>
            <li><a href="#">Иньекционная косметология</a></li>
            <li><a href="#">Уходовая косметика
</a></li>
            <li><a href="#">Обучение косметологии
</a></li>
     
          </ul>
        </div>
        <div class="footer-col">
          <h4>Информация</h4>
          <ul>
            <li><a href="#">Отзывы</a></li>
            <li><a href="#">Сертификаты</a></li>
            <li><a href="#">Запланировать визит</a></li>

          </ul>
        </div>

       
        <div class="footer-col">
          <h4>Подпишись на нас</h4>
          <div class="social-links">
            <a href="#"><i class="fab fa-vk"></i></a>
            <a href="#"><i class="fab fa-google"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-telegram"></i></a>
          </div>
        </div>
      </div>
     </div>
  </footer>

    </div>
  );
}

export default App;
