
import './listasProductos.css'
import { Button } from 'react-bootstrap';

const Productos = () => {
    return (

        <>

            <div className="conteiner-general">
                <div className="card-conteiner">
                    <h2>Babitas</h2>
                    <img src="https://http2.mlstatic.com/D_NQ_NP_2X_856758-MLA53164018562_012023-F.webp" className='imgCard' />
                    <p>Precio : $ 500</p>
                    <p>stock: 20</p>
                    <Button variant='outline-success'>Agregar al carrito</Button>

                </div>

                <div className="card-conteiner">
                    <h2>Ajuar Bebe</h2>
                    <img src="https://d3ugyf2ht6aenh.cloudfront.net/stores/180/569/products/20221124_154229-vainilla1-3418b9eceee316e62216693964558943-1024-1024.webp" className='imgCard' />
                    <p>Precio : $ 1500</p>
                    <p>stock: 15</p>
                    <Button variant='outline-success'>Agregar al carrito</Button>

                </div>
                <div className="card-conteiner">
                    <h2>Mantitas Polar</h2>
                    <img src="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/300/179/products/7g1-0e64ae66ff7aed1fd716234482531916-640-0.png" className='imgCard' />
                    <p>Precio : $ 750</p>
                    <p>stock: 30</p>
                    <Button variant='outline-success'>Agregar al carrito</Button>

                </div>
                <div className="card-conteiner">
                    <h2>Conjunto Oso</h2>
                    <img src="https://sc04.alicdn.com/kf/Hbad8f04d1da34d72827e6005fae17f190.jpg" className='imgCard' />
                    <p>Precio : $ 1300</p>
                    <p>stock: 8</p>
                    <Button variant='outline-success'>Agregar al carrito</Button>

                </div>

            </div>



        </>
    )
}

export { Productos }