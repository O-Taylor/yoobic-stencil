import { Component, h, Method, State } from '@stencil/core';

@Component({
  tag: 'stencil-grid',
  styleUrl: 'stencil-grid.css',
  shadow: true,
})
export class StencilGrid {
  @State() characters: Array<any> = [];

  componentWillLoad() {
    this.getData();
  }

  @Method()
  async getData() {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => (response.status === 200 ? response.json() : null))
      .then(data => {
        if (!data) {
          return
        }
        this.characters =  data.results;
      });
  }
render() {
    return (
      <div>
        {this.characters.map((character) =>
          <ul>
            <div><img src={character.image} alt="" /></div>
            <il>Name: {character.name}</il>
            
          </ul>
        )}
      </div>
    )
}
}



// render() {

//   for (const person of this.characters) {
//       return (
//         <ul>
//           <li>Hello {person}</li>
//         </ul>
//       )
// }
// }