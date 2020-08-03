import React, {Component, createContext} from 'react';

export const RootContext = createContext();
const Provider = RootContext.Provider;

const GlobalProvider = (Children) => {

  return(
    class ParentComp extends Component{

      state = {
          artikel : '',
      }


      render(){
        return(
          <Provider value={{
            artikel:this.state.artikel,
            handleNews:this.handleNews
          }}>
            <Children artikel={this.state.artikel} />
          </Provider>
        )
      }
    }
  )

}

const Consumer = RootContext.Consumer;

export const GlobalConsumer = (Children) => {
  return(
    class  ParentComp extends React.Component{
      render(){
        return(
          <Consumer>
          {
            (value) => {
              return(
                <Children {...value} />
              )
            }
          }
          </Consumer>
        )
      }
    }


  )
}

export default GlobalProvider;
