import React, { useEffect } from "react";
import "./Home.css";
import Photo from "../image/logo-2.png";
import { Carousel } from "react-bootstrap";
import { useAuth } from "../../context/authContext";
const Home = () => {
  const {
    user: { email },
  } = useAuth();

 function sayHello(email) {
    if (!email) {
       alert(
        "Доброго времени суток! Чтобы совершать покупки и оставлять комментарии в детальном просмотре танка, вам необходимо зарегистрироваться)"
      );
    }
  }
  useEffect(() => {
    sayHello(email)
  }, []);

  return (
    <>
    <div>
      <section style={{ width: "100%" }} className="beginer">
        <video
        style={{position: "absolute",zIndex: '-1'}}
          width="100%"
          autoPlay
          loop
          muted
          src="https://ru-wotp.wgcdn.co/static/5.96.0_9090e7/wotp_static/img/core/frontend/scss/common/blocks/video-bg/img/video-bg.mp4"
        ></video>
        <img
          width="50%"
          src={Photo}
          alt=""
          style={{ marginBottom: "100px" }}
        />
        <p>
          World of Tanks — культовая ММО-игра о бронетехнике, покорившая
          миллионы игроков по всему миру. Разнообразие игровых карт, исторически
          достоверные машины, реалистичный геймплей — присоединяйтесь к армии
          танкистов и окунитесь в атмосферу легендарных сражений.
        </p>
      </section>
      </div>
      <section className="word">
        <h2>ИГРА С ИСТОРИЕЙ</h2>
        <div className="sec">
          <Carousel controls={false} indicators={false}>
            <Carousel.Item>
              <p className="kri">ЧЕТЫРЕ НАГРАДЫ GOLDEN JOYSTICK</p>
              <h3 className="kri-bottom">
                «Лучшая MMO» (2012), «Лучшая онлайн-игра» (2013), <br />
                «По-прежнему в тренде» (2017, 2018)
              </h3>
            </Carousel.Item>
            <Carousel.Item>
              <p className="kri">ДВА МИРОВЫХ РЕКОРДА ГИННЕССА</p>
              <h3 className="kri-bottom">
                За наибольшее количество игроков, <br />
                одновременно пребывающих на игровом сервере
              </h3>
            </Carousel.Item>
            <Carousel.Item>
              <p className="kri">КРИ 2011</p>
              <h3 className="kri-bottom">Звание лучшей игры года и приз зрительских симпатий</h3>
            </Carousel.Item>
          </Carousel>
        </div>
        <p className="desc" style={{ textAlign: "center", maxWidth: "70%" }}>
          World of Tanks — это более 600 бронированных машин середины ХХ века. В
          ваших руках окажутся лучшие танки эпохи - от легендарных Т-34 и ИС,
          ковавших победу Красной армии, до безумных идей гениев инженерной
          мысли, так и не добравшихся до конвейерной ленты. Это несколько
          десятков уникальных боевых локаций, гарантирующих тактическое
          разнообразие геймплея. Это 160-миллионная армия поклонников по всему
          миру. Присоединяйтесь!
        </p>
      </section>
      <section className="before-scrin">
        <h1>Скриншоты</h1>
        <p>
          Реалистичная графика и звук дают возможность почувствовать себя частью
          настоящего танкового боя
        </p>
      </section>
      <section className="text-center scrin">
        <Carousel>
          <Carousel.Item>
            <img
              width="100%"
              src="https://ru-wotp.wgcdn.co/dcont/fb/image/tmb/1_a66_m103_redshir_1024x.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
            width="100%"
              src="https://ru-wotp.wgcdn.co/dcont/fb/image/tmb/3_f18_bat_chatillon25t_pereval_1024x.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
            width="100%"
              src="https://ru-wotp.wgcdn.co/dcont/fb/image/tmb/4_r45_is_7_mannerheim_line_1024x.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
            width="100%"
              src="https://ru-wotp.wgcdn.co/dcont/fb/image/tmb/5_a116_xm551_prohorovka_1024x.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
            width="100%"
              src="https://ru-wotp.wgcdn.co/dcont/fb/image/tmb/6_a120_m48a5_patton_aerodrom_1024x.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
            width="100%"
              src="https://ru-wotp.wgcdn.co/dcont/fb/image/tmb/7_a116_xm551_mannerheim_line_1024x.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
            width="100%"
              src="https://ru-wotp.wgcdn.co/dcont/fb/image/tmb/8_lt08_progetto_m40_mod_65_el-halluf_1024x.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
            width="100%"
              src="https://ru-wotp.wgcdn.co/dcont/fb/image/tmb/9_r133_kv_122_02_murovanka_1024x.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
            width="100%"
              src="https://ru-wotp.wgcdn.co/dcont/fb/image/tmb/10_gb31_conqueror_gc_rudniki_1024x.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </section>
      <section className="nationality">
        <h1>Более 600 боевых машин от крупнейших танкостроительных держав</h1>
        <p>Каждая модель воссоздана до мельчайших деталей</p>

        <Carousel
          indicators={false}
          className="text-center nat_inner"
          style={{ top: "100px" }}
        >
          <Carousel.Item className="item1">
            <h1 style={{ color: "white", fontSize: "80px" }} className="nat">СССР</h1>
            <img
              width="100%"
              src="https://ru-wotp.wgcdn.co/static/5.96.0_9090e7/wotp_static/img/core/frontend/scss/common/blocks/about-technic/img/overlap/ussr.webp"
              alt=""
            />
            <p>Т-34, ИС, ИС-7, КВ-1, ИСУ-152</p>
          </Carousel.Item>
          <Carousel.Item className="item2">
            <h1 style={{ color: "white", fontSize: "80px" }} className="nat" >ГЕРМАНИЯ</h1>
            <img
            width="100%"
              src="https://ru-wotp.wgcdn.co/static/5.96.0_9090e7/wotp_static/img/core/frontend/scss/common/blocks/about-technic/img/overlap/germany.webp"
              alt=""
            />
            <p>StuG III, Panther, Maus, Tiger, Pz. III</p>
          </Carousel.Item>
          <Carousel.Item className="item3">
            <h1 style={{ color: "white", fontSize: "80px" }} className="nat">США</h1>
            <img
            width="100%"
              src="https://ru-wotp.wgcdn.co/static/5.96.0_9090e7/wotp_static/img/core/frontend/scss/common/blocks/about-technic/img/overlap/usa.webp"
              alt=""
            />
            <p>Sherman, Pershing, Patton, T32, Hellcat</p>
          </Carousel.Item>
          <Carousel.Item className="item4">
            <h1 style={{ color: "white", fontSize: "80px" }} className="nat">ФРАНЦИЯ</h1>
            <img
            width="100%"
              src="https://ru-wotp.wgcdn.co/static/5.96.0_9090e7/wotp_static/img/core/frontend/scss/common/blocks/about-technic/img/overlap/france.webp"
              alt=""
            />
            <p>
              AMX 13 75, AMX 30 B, Bat.-Châtillon 25 t, Lorraine 40 t, Foch B
            </p>
          </Carousel.Item>
          <Carousel.Item className="item5">
            <h1 style={{ color: "white", fontSize: "80px" }} className="nat">ВЕЛИКОБРИТАНИЯ</h1>
            <img
            width="100%"
              src="https://ru-wotp.wgcdn.co/static/5.96.0_9090e7/wotp_static/img/core/frontend/scss/common/blocks/about-technic/img/overlap/uk.webp"
              alt=""
            />
            <p>
              Churchill VII, Centurion Mk. I, Super Conqueror, Tortoise, FV304
            </p>
          </Carousel.Item>
          <Carousel.Item className="item6">
            <h1 style={{ color: "white", fontSize: "80px" }} className="nat">ЧЕХОСЛОВАКИЯ</h1>
            <img
            width="100%"
              src="https://ru-wotp.wgcdn.co/static/5.96.0_9090e7/wotp_static/img/core/frontend/scss/common/blocks/about-technic/img/overlap/czech.webp"
              alt=""
            />
            <p>
              Škoda T 25, Konštrukta T-34/100, TVP T 50/51, TVP VTU Koncept, LT
              vz. 38
            </p>
          </Carousel.Item>
          <Carousel.Item className="item7">
            <h1 style={{ color: "white", fontSize: "80px" }} className="nat">КИТАЙ</h1>
            <img
            width="100%"
              src="https://ru-wotp.wgcdn.co/static/5.96.0_9090e7/wotp_static/img/core/frontend/scss/common/blocks/about-technic/img/overlap/china.webp"
              alt=""
            />
            <p>WZ-132, WZ-111, WZ-111 model 5A, T-34-1, WZ-111-1G FT</p>
          </Carousel.Item>
          <Carousel.Item className="item8">
            <h1 style={{ color: "white", fontSize: "80px" }} className="nat">ЯПОНИЯ</h1>
            <img
            width="100%"
              src="https://ru-wotp.wgcdn.co/static/5.96.0_9090e7/wotp_static/img/core/frontend/scss/common/blocks/about-technic/img/overlap/japan.webp"
              alt=""
            />
            <p>Type 61, O-I, Type 5 Heavy, Type 5 Chi-Ri, STB-1</p>
          </Carousel.Item>
          <Carousel.Item className="item9">
            <h1 style={{ color: "white", fontSize: "80px" }} className="nat">ШВЕЦИЯ </h1>
            <img
            width="100%"
              src="https://ru-wotp.wgcdn.co/static/5.96.0_9090e7/wotp_static/img/core/frontend/scss/common/blocks/about-technic/img/overlap/sweden.webp"
              alt=""
            />
            <p>Emil II, UDES 03, Kranvagn, Strv 103B, Strv 74</p>
          </Carousel.Item>
          <Carousel.Item className="item10">
            <h1 style={{ color: "white", fontSize: "80px" }} className="nat">ПОЛЬША</h1>
            <img
            width="100%"
              src="https://ru-wotp.wgcdn.co/static/5.96.0_9090e7/wotp_static/img/core/frontend/scss/common/blocks/about-technic/img/overlap/poland.webp"
              alt=""
            />
            <p>
              Pudel, 45TP Habicha, 60TP Lewandowskiego, 50TP prototyp, 50TP
              Tyszkiewicza
            </p>
          </Carousel.Item>
          <Carousel.Item className="item11">
            <h1 style={{ color: "white", fontSize: "80px" }} className="nat">ИТАЛИЯ</h1>
            <img
            width="100%"
              src="https://ru-wotp.wgcdn.co/static/5.96.0_9090e7/wotp_static/img/core/frontend/scss/common/blocks/about-technic/img/overlap/italy.webp"
              alt=""
            />
            <p>
              P26/40, Prototipo Standard B, Progetto M40 mod. 65, P.44 Pantera,
              P.43 bis
            </p>
          </Carousel.Item>
        </Carousel>
      </section>

      {/* <section className="types">
        <div
          style={{
            position: "absolute",
            zIndex: "1",
            textAlign: "center",
            width: "100%",
            paddingTop: "50px",
          }}
        >
          <h1 style={{ color: "white" }}>Пять уникальных классов техники</h1>
          <p>
            Огромное разнообразие боевой техники позволит найти машины, наиболее
            подходящие вашему стилю игры
          </p>
        </div> */}

        {/* <Carousel>
          <Carousel.Item className="medium d-flex flex-column justify-content-between">
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: "500px" }}
            >
              <h1
                style={{ fontSize: "85px", color: "white", fontWeight: "bold" }}
              >
                СРЕДНИЕ ТАНКИ
              </h1>
            </div>
            <div
              className="d-flex align-items-center"
              style={{ height: "500px" }}
            >
              <div style={{ width: "33%" }}>
                <p style={{ fontSize: "24px" }}>
                  Универсальные солдаты» мира танков. Достаточно скоростные и
                  манёвренные для эффективных действий на средней дистанции, при
                  этом обладающие хорошим запасом прочности, чтобы выдержать
                  серьёзные попадания от крупнокалиберных орудий.
                </p>
              </div>
              <div style={{ width: "33%", textAlign: "center" }}>
                <h3
                  style={{
                    fontSize: "65px",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  Т-54
                </h3>
              </div>
              <div
                style={{ width: "33%", textAlign: "center" }}
                className="d-flex justify-content-evenly"
              >
                <div>
                  <img
                    src="https://ru-wotp.wgcdn.co/static/5.96.0_9090e7/wotp_static/img/about_game/frontend/scss/about-technic/img/properties/4.png"
                    alt=""
                  />
                  <p style={{ fontSize: "18px" }}>Универсальность</p>
                </div>
                <div>
                  <img
                    src="https://ru-wotp.wgcdn.co/static/5.96.0_9090e7/wotp_static/img/about_game/frontend/scss/about-technic/img/properties/5.png"
                    alt=""
                  />
                  <p style={{ fontSize: "18px" }}>Работа в группе</p>
                </div>
                <div>
                  <img
                    src="https://ru-wotp.wgcdn.co/static/5.96.0_9090e7/wotp_static/img/about_game/frontend/scss/about-technic/img/properties/6.png"
                    alt=""
                  />
                  <p style={{ fontSize: "18px" }}>Атака со второй линии</p>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item className="heavy d-flex flex-column justify-content-between">
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: "500px" }}
            >
              <h1
                style={{ fontSize: "85px", color: "white", fontWeight: "bold" }}
              >
                ТЯЖЁЛЫЕ ТАНКИ
              </h1>
            </div>
            <div
              className="d-flex align-items-center"
              style={{ height: "500px" }}
            >
              <div style={{ width: "33%" }}>
                <p style={{ fontSize: "24px" }}>
                  Огромные размеры, тяжёлая броня и высочайшая огневая мощь.
                  Если вам нужен танк прорыва или машина, способная эффективно
                  сдерживать атакующего противника — это ваш выбор.
                </p>
              </div>
              <div style={{ width: "33%", textAlign: "center" }}>
                <h3
                  style={{
                    fontSize: "65px",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  E-100
                </h3>
              </div>
              <div
                style={{ width: "33%", textAlign: "center" }}
                className="d-flex justify-content-evenly"
              >
                <div>
                  <img
                    src="https://ru-wotp.wgcdn.co/static/5.96.0_9090e7/wotp_static/img/about_game/frontend/scss/about-technic/img/properties/7.png"
                    alt=""
                  />
                  <p style={{ fontSize: "18px" }}>Бронированность</p>
                </div>
                <div>
                  <img
                    src="https://ru-wotp.wgcdn.co/static/5.96.0_9090e7/wotp_static/img/about_game/frontend/scss/about-technic/img/properties/8.png"
                    alt=""
                  />
                  <p style={{ fontSize: "18px" }}>Огневая мощь</p>
                </div>
                <div>
                  <img
                    src="https://ru-wotp.wgcdn.co/static/5.96.0_9090e7/wotp_static/img/about_game/frontend/scss/about-technic/img/properties/9.png"
                    alt=""
                  />
                  <p style={{ fontSize: "18px" }}>Живучесть</p>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item className="pt d-flex flex-column justify-content-between">
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: "500px" }}
            >
              <h1
                style={{ fontSize: "85px", color: "white", fontWeight: "bold" }}
              >
                ПТ-САУ
              </h1>
            </div>
            <div
              className="d-flex align-items-center"
              style={{ height: "500px" }}
            >
              <div style={{ width: "33%" }}>
                <p style={{ fontSize: "24px" }}>
                  Дальнобойные снайперы и охотники за теми, кого успели
                  обнаружить лёгкие танки. Обладают наибольшим уроном в игре.
                  Первостепенная задача ПТ-САУ — выбрать наиболее выгодную
                  позицию с максимально широким сектором обстрела и вести огонь
                  по позициям противника с дальней дистанции, оставаясь
                  незамеченными.
                </p>
              </div>
              <div style={{ width: "33%", textAlign: "center" }}>
                <h3
                  style={{
                    fontSize: "65px",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  Объект-705
                </h3>
              </div>
              <div
                style={{ width: "33%", textAlign: "center" }}
                className="d-flex justify-content-evenly"
              >
                <div>
                  <img
                    src="https://ru-wotp.wgcdn.co/static/5.96.0_9090e7/wotp_static/img/about_game/frontend/scss/about-technic/img/properties/10.png"
                    alt=""
                  />
                  <p style={{ fontSize: "18px" }}>Колосальный урон</p>
                </div>
                <div>
                  <img
                    src="https://ru-wotp.wgcdn.co/static/5.96.0_9090e7/wotp_static/img/about_game/frontend/scss/about-technic/img/properties/11.png"
                    alt=""
                  />
                  <p style={{ fontSize: "18px" }}>Точность</p>
                </div>
                <div>
                  <img
                    src="https://ru-wotp.wgcdn.co/static/5.96.0_9090e7/wotp_static/img/about_game/frontend/scss/about-technic/img/properties/12.png"
                    alt=""
                  />
                  <p style={{ fontSize: "18px" }}>Маскировка</p>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item className="art d-flex flex-column justify-content-between">
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: "500px" }}
            >
              <h1
                style={{ fontSize: "85px", color: "white", fontWeight: "bold" }}
              >
                САУ
              </h1>
            </div>
            <div
              className="d-flex align-items-center"
              style={{ height: "500px" }}
            >
              <div style={{ width: "33%" }}>
                <p style={{ fontSize: "24px" }}>
                  Класс поддержки, наименее мобильный и живучий, но обладающий
                  уникальной ролью в игре. Задача артиллерии — вести огонь по
                  обнаруженной технике противника, оглушая её экипаж и выводя из
                  строя ключевые узлы машин.
                </p>
              </div>
              <div style={{ width: "33%", textAlign: "center" }}>
                <h3
                  style={{
                    fontSize: "65px",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  СУ-14, T92 HMC, G.W. Tiger, Bat.-Châtillon 155 58
                </h3>
              </div>
              <div
                style={{ width: "33%", textAlign: "center" }}
                className="d-flex justify-content-evenly"
              >
                <div>
                  <img
                    src="https://ru-wotp.wgcdn.co/static/5.96.0_9090e7/wotp_static/img/about_game/frontend/scss/about-technic/img/properties/13.png"
                    alt=""
                  />
                  <p style={{ fontSize: "18px" }}>Поддержка</p>
                </div>
                <div>
                  <img
                    src="https://ru-wotp.wgcdn.co/static/5.96.0_9090e7/wotp_static/img/about_game/frontend/scss/about-technic/img/properties/14.png"
                    alt=""
                  />
                  <p style={{ fontSize: "18px" }}>Оглушение</p>
                </div>
                <div>
                  <img
                    src="https://ru-wotp.wgcdn.co/static/5.96.0_9090e7/wotp_static/img/about_game/frontend/scss/about-technic/img/properties/15.png"
                    alt=""
                  />
                  <p style={{ fontSize: "18px" }}>Альтернативный геймплей</p>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item className="lt d-flex flex-column justify-content-between">
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: "500px" }}
            >
              <h1
                style={{ fontSize: "85px", color: "white", fontWeight: "bold" }}
              >
                ЛЁГКИЕ ТАНКИ
              </h1>
            </div>
            <div
              className="d-flex align-items-center"
              style={{ height: "500px" }}
            >
              <div style={{ width: "33%" }}>
                <p style={{ fontSize: "24px" }}>
                  Самый мобильный, скоростной, компактный и одновременно
                  уязвимый класс в игре. Лёгкие танки — прирождённые разведчики,
                  и их роль — раскрывать позиции техники противника, как можно
                  дольше оставаясь в живых.
                </p>
              </div>
              <div style={{ width: "33%", textAlign: "center" }}>
                <h3
                  style={{
                    fontSize: "65px",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  Rheinmetall Panzerwagen
                </h3>
              </div>
              <div
                style={{ width: "33%", textAlign: "center" }}
                className="d-flex justify-content-evenly"
              >
                <div>
                  <img
                    src="https://ru-wotp.wgcdn.co/static/5.96.0_9090e7/wotp_static/img/about_game/frontend/scss/about-technic/img/properties/1.png"
                    alt=""
                  />
                  <p style={{ fontSize: "18px" }}>Скорость</p>
                </div>
                <div>
                  <img
                    src="https://ru-wotp.wgcdn.co/static/5.96.0_9090e7/wotp_static/img/about_game/frontend/scss/about-technic/img/properties/2.png"
                    alt=""
                  />
                  <p style={{ fontSize: "18px" }}>Мобильность</p>
                </div>
                <div>
                  <img
                    src="https://ru-wotp.wgcdn.co/static/5.96.0_9090e7/wotp_static/img/about_game/frontend/scss/about-technic/img/properties/3.png"
                    alt=""
                  />
                  <p style={{ fontSize: "18px" }}>Незаметность</p>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </section> */}
    </>
  );
};

export default Home;
