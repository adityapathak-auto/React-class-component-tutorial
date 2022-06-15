export const React18 = ()=>{
    return(<div>

        <div className="NOTES">
        <h1>React 18 new Features</h1>
        <p>1.<span>Concurrency A new concept  set of features ( and APIs ) that help with state update prioritization Urgent state updates can be prioritized over less urgent , long - taking ( blocking ) updates</span></p>
        <p>followed by Second state update setShow ( true ) ; Without Concurrency ( i.e. ,  React 17 ) First state update setUser ( u1 ) ;</p>
        
        
        <p>Concurrency ( i.e. ,  React 18 ) setUser ( ul ) ; setShow ( true ) ; Long - taking state update is performed in the background whilst the urgent update can be prioritized</p>
      

      <br/>

      <p>use Transition & startTransition ( ) S " Tell React " that some state update may be handled with lower priority useTransition ( ) Use in functional components Returns an array with exactly two values : [ isPending , startTransition ] startTransition ( ) Use in places where hooks can't be used Wrap a state update with startTransition ( ) to let React know that it may be handled with lower priority startTransition ( ( ) = > setSelectedUser ( user ) ) ;</p>


                <p>useDeferredValue ( ) " Tell React " that an older value should be displayed until a new ( updated ) value is ready useDeferredValue ( ) Kind of similar to start Transition ( ) but can be used in cases where you don't have full control over the state update e.g. , receiving a stateful value as props Wrap a value and get a deferred ( old ) value until an updated value is available const deferredVal = useDeferredValue ( value ) ;</p>
   
        <br />
        <hr/>

        <p>2. <span>Improved Suspense S Suspense : A component & concept that helps with Ul updates related to code ( & data ) fetching .  Suspense fallback =  LoadingSpinner /     LazyComponent /  Show a fallback component until another component is ready for rendering  / Suspense  React 18 enables Suspense for server - side rendering . In addition , Suspense will also be usable for general data fetching ( and not just code splitting ) in the future .</span></p>
        <hr/>
        <p>3. <span>New Feature: Automatic Batching
Batching is when React groups multiple state updates into a single re-render for better performance. Without automatic batching, we only batched updates inside React event handlers. Updates inside of promises, setTimeout, native event handlers, or any other event were not batched in React by default. With automatic batching, these updates will be batched automatically:</span></p>
</div>

<div>
    <p className="text-danger">We can use fluhSync if we dont want to use automatic batching.It is a function which takes a callback function inside which we can pass setState for the state we want</p>

<img src={require("../../assets/Batching.png")} alt=""/>
</div>
<hr/>
    </div>)
}