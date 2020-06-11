import React, { Component } from 'react';
import {
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardImage,
} from 'mdbreact';
import Layout from './Layout';
import { getPlaces } from './apiCore';

import BannerTop from './BannerTop';
import Background1 from './resources/FondoNaranja.png';
import Background2 from './resources/FondoNegro.png';
import Background3 from './resources/FondoAzul.png';
import Icon1 from './resources/Servicios/hogar.svg';
import Icon2 from './resources/Servicios/auto.svg';
import Icon3 from './resources/Servicios/oficina.svg';
import Icon4 from './resources/Servicios/mas.svg';
const arrayImage = [Background1, Background2, Background3];
const arrayIcon = [Icon1, Icon2, Icon3, Icon4];

export default class Home extends Component {
    state = {
        placesToClean: [],
        arrayImage: arrayImage,
        arrayIcon: arrayIcon,
    };

    componentDidMount() {
        getPlaces().then(data => {
            if (!data || data.error) {
                if (!data) {
                    console.log('data is empty');
                } else {
                    console.log(data.error);
                }
            } else {
                this.setState({ placesToClean: data });
            }
        });
    }

    render() {
        const { placesToClean, arrayImage, arrayIcon } = this.state;
        console.log(placesToClean);
        const { history } = this.props;
        return (
            <Layout className="center backColorLigthGray">
                <BannerTop
                    title="Clean Easy"
                    description="Sabemos de limpieza"
                />
                {/* <h2 className="mb-4">New Arrivals</h2>
    <div className="row">
      {productsByArrival.map((product, i) => (
        <div key={i} className="col-3 mb-3">
          <Card product={product} />
        </div>
      ))}
    </div>
    <h2 className="mb-4">Best Sellers</h2>
    <div className="row">
      {productsBySell.map((product, i) => (
        <div key={i} className="col-3 mb-3">
          <Card product={product} />
        </div>
      ))}
      </div> */}
                <div className="row">
                    <div className="container mb-3 mt-3 text-center">
                        <h1 className="mb-2 caps">¿Que necesitas limpiar?</h1>
                        <h4 className="mb-3">
                            Seleccione el tipo de zona que desea limpiar{' '}
                        </h4>
                        <div className="row">
                            {placesToClean &&
                                placesToClean.rows &&
                                placesToClean.rows.map((product, index) => {
                                    return (
                                        <>
                                            <MDBCol
                                                lg="3"
                                                md="12"
                                                className="mb-lg-0 mb-4"
                                            >
                                                <MDBCard
                                                    className=" mdb-color lighten-4"
                                                    style={{
                                                        backgroundImage: `url(${arrayImage[index]})`,
                                                        backgroundRepeat:
                                                            'round',
                                                        minHeight: '260px',
                                                    }}
                                                    onClick={() => {
                                                        history.push('/step2');
                                                    }}
                                                >
                                                    <MDBCardBody className="white-text">
                                                        <MDBCardTitle tag="h3">
                                                            {product.name}
                                                        </MDBCardTitle>

                                                        <div className="d-flex mt-5">
                                                            <MDBCardImage
                                                                src={
                                                                    arrayIcon[
                                                                        index
                                                                    ]
                                                                }
                                                                overlay=""
                                                                className=" mitadwidth mt-5"
                                                            />
                                                        </div>
                                                    </MDBCardBody>
                                                </MDBCard>
                                            </MDBCol>

                                            {/* <div key={product._id} className="col-3 mb-3">
                  <PlaceCard product={product} onClick={() => { toggleInMap(product._id) }} isSelected={map[product._id]} />
                </div> */}
                                        </>
                                    );
                                })}
                        </div>
                        {/* <div className="row reverse">
          <MDBBtn
            right
            color="blue"
            onClick={() => {
              history.push("/step2");
            }}
          >
            Siguiente
          </MDBBtn>
        </div> */}
                    </div>
                </div>
            </Layout>
        );
    }
}

// export default Home;
