/**
 * HomePage Component
 * * The main entry point of the application.
 * Responsibilities:
 * - Introduces the core business value proposition.
 * - Aggregates key highlights from services, news, and client stories.
 * - Acts as a gateway to deeper sections of the site (Assistans, Arbetsgivare, etc.).
 */
import React from 'react';
import startHero from '../../assets/startHero.svg';
import ServiceAccordion from './ServiceAccordion';
import { NavLink } from 'react-router';
import './HomePage.scss';

const HomePage: React.FC = () => {
    return (
        <div className="home-page">
            <section className="hero">
                <div className="hero-container">
                    <img src={startHero} alt="Hero bild"className="hero-img" />
                    <h1 className="hero-title">
                        <span>Egen arbetsgivare?</span>
                        <span>Såhär kommer du igång!</span>
                    </h1>
                </div>
            </section>

            <div className="content-wrapper">
                <div className="services-grid ">
                    <ServiceAccordion title="Personlig Assistans">
                        <p>Info om personlig assistans...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum sem est felis, aliquam mollis pellentesque. Morbi laoreet fusce massa a et ac vitae malesuada a...</p>
                        <NavLink to="/personlig-assistans">Se hela sidan</NavLink>
                    </ServiceAccordion>

                    <ServiceAccordion title="Bli egen arbetsgivare">
                        <p>Info om hur du blir egen arbetsgivare...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum sem est felis, aliquam mollis pellentesque. Morbi laoreet fusce massa a et ac vitae malesuada a...</p>
                        <NavLink to="/bli-egen-arbetsgivare">Se hela sidan</NavLink>
                    </ServiceAccordion>

                    <ServiceAccordion title="Egna berättelser">
                        <p>Info om egna berättelser...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum sem est felis, aliquam mollis pellentesque. Morbi laoreet fusce massa a et ac vitae malesuada a...</p>
                        <NavLink to="/egna-berattelser">Se hela sidan</NavLink>
                    </ServiceAccordion>

                    <ServiceAccordion title="Nyheter">
                        <p>Info om nyheter...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum sem est felis, aliquam mollis pellentesque. Morbi laoreet fusce massa a et ac vitae malesuada a...</p>
                        <NavLink to="/nyheter">Se hela sidan</NavLink>
                    </ServiceAccordion>
                </div>

                <section className="main-info">
                    <h2>Ta kommandot över din vardag</h2>

                    <h3>Mer frihet som egen arbetsgivare</h3>

                    <p>Idag anordnas bara tre procent av all personlig assistans av brukaren själv. Det borde kunna vara betydligt fler, särskilt om man kan få hjälp med det administrativa och juridiska.  Som egen anordnare, med egen firma, bestämmer du själv hur du vill ha det.</p>

                    <p>Välj själv vilka som ska vara dina assistenter, vad de ska få i lön, vilka utbildningar de ska gå, deras arbetsuppgifter och hur jobbet ska skötas.</p>

                    <p>Kom att <NavLink to="/bli-egen-arbetsgivare">bli egen arbetsgivare</NavLink> och <NavLink to="/kontakt">kontakta Egen assistans</NavLink> om du vill ha hjälp.</p>
                </section>
            </div>
        </div>
    );
};

export default HomePage;
