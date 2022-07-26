import axios,  {AxiosResponse}  from "axios"; 
interface UserProps{
    id?: number; 
    name?: string;   // it may have name property, it is optional property now. 
    age?: number;   // it may have age property, it is optional property now. 
}
type Callback = () => void; 
  // {} it will return an object
export class User{
// object to store the private information about the user.
    events: { [ key: string ]: Callback[] } = {}; 
    constructor ( private  data: UserProps ) {
}
    get ( propName: string ): (string | number) {  // type uinion it will return either string or number
        return this.data[ propName ]; 
    }
    set ( update: UserProps ): void  {
        // copy update object over data object
        Object.assign( this.data, update );  
        
    }
        // event handlers -- add event listener  on(event, callback)
    on( eventName: string, callback: Callback ): void {
        const handlers = this.events[ eventName ] || [];
        handlers.push( callback ); 
        this.events[ eventName ] = handlers; 
        
    }
    // triggers an event to tell other parts of app that something has changed. 
    trigger ( eventName:string, callback: Callback ): void {
        const handlers= this.events[eventName]; 
        if ( !handlers || handlers.length===0  ) {
            return ; 
        }
        handlers.forEach( callback => {
            callback(); 
        })
    }
    fetch (): void {
        axios.get( `http://localhost:4000/users/${ this.get( 'id' ) }` )
        
            .then( ( res: AxiosResponse ): void => {
                this.set(res.data)
                // console.log( this.set(res.data) ); 
        })
    
    }

}
// const user= new User( data: { name: "ranjan", age: 20 } );