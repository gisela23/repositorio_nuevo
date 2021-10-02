<template>

  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">

      <a class="navbar-brand" href="#">VUE3</a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <div class="collapse navbar-collapse" id="navbarNav">
        
        <ul class="navbar-nav">

          <li class="nav-item">
            <router-link class="nav-link active" to="/"> Home</router-link> 
          
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
            
          </li>
          <li class="nav-item">
            <router-link to="/nuestrasnoticias" class="nav-link">Noticias</router-link> 
      
          </li>
          <li class="nav-item">
            <router-link to="/Publicaciones" class="nav-link">Publicación</router-link>
            
          </li>
        
          <li class="nav-item">
            
            <router-link to="/TeoremadePitagoras" class="nav-link">Teorema de Pitágoras</router-link>
            
          </li>
          <li class="nav-item">

            <router-link to="cliente" class="nav-link">Cliente</router-link>

          </li>
           <li class="nav-item">

            <router-link to="Producto" class="nav-link">Producto</router-link>

          </li>
        </ul>
      </div>
    </div>
  </nav>

    <div class="container mt-3">
      
      <router-view/>
    </div> 
    
    
 

  
</template>

<style>



</style>
