 const Header = () => {

  return <div className="flex justify-between items-center px-6 pb-2 text-slate-700 border-b-2 border-slate-700">
    <div className="basis-1/3">
      <p><strong>Thibaut</strong></p>
      <p>0777360388</p>
      <p>thibaut.roland2@gmail.com</p>
    </div>
    <div className="basis-1/3 text-center font-bold">web dev</div>
    <div className="basis-1/3  bg-yellow-300">
      <img className="w-16 rounded-full" src="/Portraits_LeWagon_centre_carre.jpg"/>
    </div>
  </div>
}

export default Header
