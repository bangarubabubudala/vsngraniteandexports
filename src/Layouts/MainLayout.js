import { Fragment, React, useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../App.css'
import { Container } from 'react-bootstrap';
import About from '../Components/About';
import Home from '../Components/Home';
import Services from '../Components/Services';
import Products from '../Pages/Products';

const MainLayout = () => {

    return (
        <>
            <Fragment>

                <div className="main_section">
                    <Container fluid>
                        <main style={{ paddingTop: '56px', paddingBottom: '56px' }}>
                            <Router>
                                <Header />
                                {/* <About /> */}
                                <Switch>
                                    <Route exact path="/home" component={Home} />
                                    <Route path="/about" component={About} />
                                    <Route path="/services" component={Services} />
                                    <Route path="/products" component={Products} />
                                </Switch>
                            </Router>
                        </main>
                    </Container>
                </div>

                <Footer />
            </Fragment>


        </>
    )
}

export default MainLayout
