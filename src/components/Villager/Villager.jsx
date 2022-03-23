const Villager = (props) => {
  return ( 
    <>
      <div className="villager">
        <img src={props.villager.image_uri}
        alt="villager" />
        <h2>{props.villager['file-name']}</h2>
      </div>
    </>
  );
}
 
export default Villager