class INIT{

    async home(){
        const data = await fetch("https://cdserver.vercel.app/")
        const categorias = await data.json()
        return categorias
      }
    async categoria(categoriaid){
      const data = await fetch(`https://cdserver.vercel.app/categoria/${categoriaid}`)
      const categoria = await data.json()
      return categoria
    }
    async perfil(id){
      const data = await fetch(`https://cdserver.vercel.app/perfil/${id}`)
      const perfil = await data.json()
      return perfil
    }
    async productos(){
        
    } 
    async AllProducts(){
      const data = await fetch(`https://cdserver.vercel.app/anuncios`)
      const anuncios = await data.json()
      return anuncios
  }
    async producto(){
  
        
  }
  async autor(data){
   
}
}
export {INIT}