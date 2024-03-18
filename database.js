let notes =[
    {
      id:1,
      title:"my 1st note",
      timestamp: Date.now(),
      content:"Sure! Cats are small carnivorous mammals that are often kept as pets. They are known for their agility, grace, and independent nature. There are many different breeds of cats, each with its own unique characteristics. Cats are popular companions for humans and are valued for their ability to hunt pests, provide comfort, and form strong bonds with their owners. They come in a variety of colors and patterns, and their behavior can range from playful and affectionate to aloof and independent. Overall, cats have been a significant part of human culture for thousands of years and continue to be beloved pets in households around the world."
    },
    {
      id:2,
      title:"my 2nd note",
      timestamp :Date.now(),
      content:"Certainly! Did you know that cats have a unique way of communicating with humans? They use a variety of vocalizations, body language, and facial expressions to convey their emotions and needs. For example, a cat might purr when feeling content or knead with its paws when feeling relaxed. Additionally, cats might meow to get attention or indicate hunger. Understanding a cat's communication cues can help strengthen the bond between cats and their human companion"
    }
  ];

  let currentid =3

  function getNotes(searchterm) {
    if(!searchterm){
      return notes;
    }
    return notes.filter(note => note.title.includes(searchterm) || note.content.includes(searchterm))

    
  }
    exports.getNotes = getNotes

    function getNote (id) {

    return notes.find((note)=>note.id===id);
    
    }
    exports.getNote = getNote

    function addNote (note) {
        notes.push({
          ...note,
          id: currentid,
          timestamp:Date.now(),
          
        });
        currentid++
    }
    exports.addNote = addNote

    function deleteNote (id) {
        notes=notes.filter(note => note.id!==id)
    }
    exports.deleteNote = deleteNote