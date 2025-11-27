function CharacterDescription({_description}){
  return( 
    <p>
      {_description}
    </p>
  )
}

function CharacterImage({ _image, _character_name }){
  return(
    <img
      src={_image}
      alt={_character_name}
      width={256}
      height={256}
    />
  )
}

function CharacterCard(){
  return(
    <>

      <CharacterImage
        _image='/drifter.jpg'
        _character_name='drifter'
      />
    
      <CharacterDescription
        _description='OMG Drifter is so cool!'
      />

    </>
  )
}

export default CharacterCard;