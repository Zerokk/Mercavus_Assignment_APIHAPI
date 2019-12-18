
import { Index_Controller } from '../controllers/Index_Controller';
import { PageNotFound_Controller } from '../controllers/PageNotFound_Controller';

/**
 * This class handles all the routes of the application, for a given Hapi server instance. It also
 * allows other parts of the app to add custom routes.
 */
export class RouteHandler {

    private hapiServerRef;

    constructor(hapiServer) {
        this.hapiServerRef = hapiServer;
        this.initializeControllers();
    }


    private initializeControllers() {
        // Default route (index)
        this.hapiServerRef.route({
            method: 'GET',
            path: '/',
            handler: Index_Controller
        });

        // 404 Error handling
        this.hapiServerRef.route({
            method: '*',
            path: '/{any*}',
            handler: PageNotFound_Controller
        });

    }

    public addRouteObject(routeObject) {
        this.hapiServerRef.route(routeObject);
    }



}
