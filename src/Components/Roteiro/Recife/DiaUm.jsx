import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

import da from './img/da.png';
import barg from './img/barg.png';
import pina from './img/pina.png';
import toquinho from './img/taquinho.png';
import riomar from './img/riomar.png';
import joana from './img/joana.png';
import location from './img/location.png';
import dt2 from './img/dt2.png';
import dt5 from './img/dt5.png';
import Footer from '../../Footer';

const TresDiasRecife = () => {
  return (
    <>
      <main className="container">
        <div className="title2 m-3 row justify-content-around">
          <h1 className="col">Guia de Recife para 03 dias</h1>
          <button>
            <a
              href="#"
              download="recife.pdf"
              className="btnDownload col-3 text-center"
            >
              Baixar Roteiro Completo
              <i class="bi bi-cloud-arrow-down-fill"></i>
            </a>
          </button>
        </div>
        <div className="botoes">
          <Link to="/diaum">
            <button>Dia 01</button>
          </Link>
          <Link to="/diadois">
            <button>Dia 02</button>
          </Link>
          <Link to="/diatres">
            <button>Dia 03</button>
          </Link>
        </div>
        <div>
          <div className="tab-content dia" id="pills-tabContent">
            <h2 className="my-5">
              <b>Dia 03</b>
            </h2>
            <div className="content ">
              <div className="row item mb-5">
                <div className="title mx-3">
                  <h3 className="mb-3 card-info">Praia do Pina</h3>
                </div>
                <div className="col clearfix">
                  <div className="images-card">
                    <div className="img1">
                      <img
                        className="card-roteiro col-md-6 float-md-start mb-3 mx-md-3"
                        src={pina}
                        alt=""
                      />
                    </div>
                    <div className="img2">
                      <img src={da} alt="" />
                    </div>
                  </div>
                </div>
                <div className="col mx-3 descricao">
                  <h4 className="mt-4 ">09:00</h4>
                  <p>
                  A Praia do Pina ?? uma praia popular do Recife, com longa faixa de areia, coqueiros na orla e mar verdinho, t??pico da regi??o. ?? um lugar bastante frequentado por moradores da cidade, com quiosques e barracas, mas fiquem atentos aos sinais na areia de tubar??es.  <br />
                    <br />
                    Ela ?? uma continua????o da praia Boa Viagem e pode ser uma boa op????o para curtir o mar num dia de sol. Uma das boas vantagens do Recife ?? que as ??guas do mar tem temperatura agrad??vel e n??o causam aquele choque t??rmico na hora do mergulho. 
                    
                  </p>

                  <h3>Dura????o: 4h</h3>
                  <div className="endereco">
                    <div className="img-location">
                      <img src={location} alt="" />
                      <p>
                        Endere??o: Pina, Recife - PE
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-content dia" id="pills-tabContent">
            <div className="content ">
              <div className="row item mb-5">
                <div className="title mx-3">
                  <h3 className="mb-3 card-info">Tasquinha do Tio</h3>
                </div>
                <div className="col clearfix">
                  <div className="images-card">
                    <div className="img1">
                      <img
                        className="card-roteiro col-md-6 float-md-start mb-3 mx-md-3"
                        src={toquinho}
                        alt=""
                      />
                    </div>
                    <div className="img2">
                      <img src={dt2} alt="" />
                    </div>
                  </div>
                </div>
                <div className="col mx-3 descricao">
                  <h4 className="mt-4 ">1h30</h4>
                  <p>
                  Restaurante portugu??s ?? beira mar, ideal para almo??ar, de frente para a praia, com um clima agrad??vel e comida excelente. Al??m da comida impec??vel, esse queridinho dos famosos tem drinks locais e muito criativos para refrescar o seu dia.
                    
                  </p>

                  <h3>Dura????o: 1h30</h3>
                  <div className="endereco">
                    <div className="img-location">
                      <img src={location} alt="" />
                      <p>
                      Endere??o: Av. Boa Viagem, 560 - Pina, Recife - PE
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content ">
            <div className="row item mb-5">
              <div className="title mx-3">
                <h3 className="mb-3 card-info">Shopping RioMar</h3>
              </div>
              <div className="col clearfix">
                <div className="images-card">
                  <div className="img1">
                    <img
                      className="card-roteiro col-md-6 float-md-start mb-3 mx-md-3"
                      src={riomar}
                      alt=""
                    />
                  </div>
                  <div className="img2">
                    <img src={dt5} alt="" />
                  </div>
                </div>
              </div>
              <div className="col mx-3 descricao">
                <h4 className="mt-4 ">15:00</h4>
                <p>
                O Shopping Rio Mar ?? o mais novo do Recife e um dos maiores do Brasil. Nele ?? poss??vel encontrar uma grande variedade de lojas de marcas brasileiras e estrangeiras, al??m de restaurantes e servi??os. 
                  
                </p>

                <h3>Dura????o: 3h</h3>
                <div className="endereco">
                  <div className="img-location">
                    <img src={location} alt="" />
                    <p>Endere??o: Avenida Rep??blica do L??bano, 251, Pina, Recife - PE</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-content dia" id="pills-tabContent">
            <div className="content ">
              <div className="row item mb-5">
                <div className="title mx-3">
                  <h3 className="mb-3 card-info">
                  Galeria Joana D???Arc
                  </h3>
                </div>
                <div className="col clearfix">
                  <div className="images-card">
                    <div className="img1">
                      <img
                        className="card-roteiro col-md-6 float-md-start mb-3 mx-md-3"
                        src={joana}
                        alt=""
                      />
                    </div>
                    <div className="img2">
                      <img src={dt5} alt="" />
                    </div>
                  </div>
                </div>
                <div className="col mx-3 descricao">
                  <h4 className="mt-4 ">18:00</h4>
                  <p>
                  A Galeria Joana D'arc ainda n??o ?? um lugar t??o famoso no Recife, mas ?? uma op????o bacana para conhecer ?? noite. O lugar tem algumas lojas e restaurantes, e fica cheio aos finais de semana. Por l?? voc?? encontrar?? restaurantes de comida italiana, mexicana e uma das melhores creperias da cidade. A facilidade dessa galeria ?? agrupar restaurantes variados no mesmo local, agradando pessoas de diversos gostos e idades.
                    
                  </p>

                  <h3>Dura????o: 1h</h3>
                  <div className="endereco">
                    <div className="img-location">
                      <img src={location} alt="" />
                      <p>
                      Endere??o: Av. Herculano Bandeira, 513, Pina, Recife - PE
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content ">
              <div className="row item mb-5">
                <div className="title mx-3">
                  <h3 className="mb-3 card-info">Restaurante Barga??o</h3>
                </div>
                <div className="col clearfix">
                  <div className="images-card">
                    <div className="img1">
                      <img
                        className="card-roteiro col-md-6 float-md-start mb-3 mx-md-3"
                        src={barg}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col mx-3 descricao">
                  <h4 className="mt-4 ">19:30</h4>
                  <p>
                  Nada como finalizar a viagem com um dos melhores restaurantes de Recife. o Barga??o iniciou o que seria o marco da comida baiana e frutos do mar no Brasil. Sua hist??ria come??ou h?? 37 anos, quando o pernambucano da cidade de Limoeiro Leonel Evaristo da Rocha chegou ?? Bahia em 1968 para trabalhar. 
                    
                  </p>

                  <h3>Dura????o: 2h</h3>
                  <div className="endereco">
                    <div className="img-location">
                      <img src={location} alt="" />
                      <p>Endere??o: Av. Engenheiro Ant??nio de G??es, 62, Pina, Recife - PE</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TresDiasRecife;
