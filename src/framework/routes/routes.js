
import UserRouter  from "./UserRoutes/userRoute.js"
import VenderRouter from "./VenderRoutes/venderRoute.js"

const routes = (app, express) =>{

    app.get('/', (req, res) => {
        res.send('Machine Test');
    });

    app.use('/api/v1/user',UserRouter(express));
    app.use('/api/v1/vender',VenderRouter(express));

}
export default routes