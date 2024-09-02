export function Appbar() {
    return <div>
        <div className="flex  justify-between">
            <div>
                muzi
            </div>
            <div>
                <button className="m-2 p-2 bg-blue-400" onClick={() => signIn()}>SignIn</button>
            </div>
        </div>
    </div>
    
}