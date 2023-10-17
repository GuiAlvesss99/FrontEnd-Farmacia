 import saude from '../../assets/2546639-ai(1) 1.png' 
import ListaCategorias from '../../components/category/listCategory/ListCategory';
/* import ListaPostagens from '../../components/posts/listPosts/listPosts';
import ModalPostagem from '../../components/posts/modalPost/modalPost'; */



function Home() {
    return (
        <>
        <div className="bg-yellow-400 flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl text-black font-bold'>Seja bem vindo!</h2>
              <p className='text-xl text-black'>Aqui você encontra todo tipo de medicamento desejado</p>
  
              <div className="flex justify-around gap-4">
              {/* <ModalPostagem /> */}
              <button className='rounded bg-white text-blue-800 py-2 px-4'>Ver Produtos</button>
            </div>
            </div>
            <div className="flex justify-center ">
              <img src={saude} alt="" className='w-2/3' />
            </div>
          </div>
        </div>
        {<ListaCategorias />}
      </>
    );
}

export default Home;