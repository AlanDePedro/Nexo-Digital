export default function Footer(){
    return(
        <>
    <footer style={{backgroundColor:"#91C4F2"}}>
    
    <div className="container py-4">

      <div className="py-3 d-flex justify-content-between align-items-center">

        <div >
          <ul className="list-unstyled mb-0 text-light">
            <li className="mb-2"><a href="#" className="text-light link-dark" style={{textDecoration:"none"}}>SHOP</a></li>
            <li className="mb-2"><a href="#" className="text-light link-dark" style={{textDecoration:"none"}}>INGRESAR</a></li>
            <li className="mb-2"><a href="#" className="text-light link-dark" style={{textDecoration:"none"}}>CONTACTO</a></li>
          </ul>
        </div>
        
        <div className="">
          <img src="logo.png" style={{height:"100px"}} className="rounded-circle"></img>
        </div>

      </div>

    </div>

   
    <div className="bg-light">
      <div className="container text-center">
        <p className="text-muted mb-0 py-1">All rights reserved 2024 - Nexo Digital</p>
      </div>
    </div>
    
  </footer>
  
        </>
    )
}