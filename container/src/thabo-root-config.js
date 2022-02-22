import { registerApplication, start } from "single-spa";
import {
    constructApplications,
    constructRoutes,
    constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";
import { homePage, detailsPage } from './utility-methods'

const routes = constructRoutes(microfrontendLayout);
const applications = constructApplications({
    routes,
    loadApp({ name }) {
        return System.import(name);
    },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

registerApplication('@thabo/home', () => System.import('@thabo/home'), homePage)
registerApplication('@thabo/details', () => System.import('@thabo/details'), detailsPage)
registerApplication('@thabo/navigation', () => System.import('@thabo/navigation'), () => true)

layoutEngine.activate();
start();
