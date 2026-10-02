import { useState } from "react"; 
 
export default function App() { 
  const [emergency, setEmergency] = useState(false); 
  const [type, setType] = useState(""); 
 
  const requestEmergency = () => { 
    if (!type) { 
      alert("Please select an emergency type"); 
      return; 
    } 
 
    setEmergency(true); 
  }; 
 
  return ( 
    <div className="min-h-screen bg-slate-950 text-white"> 
 
      {/* Navbar */} 
      <nav className="border-b border-slate-800 bg-slate-950/90"> 
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5"> 
 
          <div> 
            <h1 className="text-xl font-bold"> 
              <span className="text-red-500">●</span> ResQ 
            </h1> 
            <p className="text-xs text-slate-500"> 
              Emergency Response System 
            </p> 
          </div> 
 
          <div className="flex items-center gap-3"> 
            <div className="h-2 w-2 rounded-full bg-green-500"></div> 
            <span className="text-sm text-slate-400"> 
              System Online 
            </span> 
          </div> 
 
        </div> 
      </nav> 
 
 
      {/* Main */} 
      <main className="mx-auto max-w-7xl px-6 py-8"> 
 
        {/* Header */} 
        <div className="mb-8"> 
          <p className="mb-2 text-sm text-red-400"> 
            EMERGENCY RESPONSE 
          </p> 
 
          <h2 className="text-3xl font-bold md:text-4xl"> 
            Get emergency help, 
            <span className="text-red-500"> wherever you are.</span> 
          </h2> 
 
          <p className="mt-3 max-w-2xl text-slate-400"> 
            Share your location instantly with the nearest available 
            emergency vehicle. 
          </p> 
        </div> 
 
 
        {/* Dashboard Grid */} 
        <div className="grid gap-6 lg:grid-cols-3"> 
 
          {/* Emergency Card */} 
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 lg:col-span-1"> 
 
            <div className="mb-6"> 
              <h3 className="text-lg font-semibold"> 
                Request Emergency Help 
              </h3> 
 
              <p className="mt-1 text-sm text-slate-500"> 
                Select what happened 
              </p> 
            </div> 
 
 
            {/* Emergency Types */} 
            <div className="grid grid-cols-2 gap-3"> 
 
              {[ 
                ["🚑", "Medical"], 
                ["🚗", "Accident"], 
                ["🔥", "Fire"], 
                ["🆘", "Other"], 
              ].map(([icon, name]) => ( 
 
                <button 
                  key={name} 
                  onClick={() => setType(name)} 
                  className={`rounded-xl border p-4 text-left transition ${ 
                    type === name 
                      ? "border-red-500 bg-red-500/10" 
                      : "border-slate-700 bg-slate-950 hover:border-slate-600" 
                  }`} 
                > 
                  <div className="text-2xl">{icon}</div> 
 
                  <p className="mt-2 text-sm font-medium"> 
                    {name} 
                  </p> 
 
                </button> 
 
              ))} 
 
            </div> 
 
 
            {/* Location */} 
            <div className="mt-6 rounded-xl bg-slate-950 p-4"> 
 
              <div className="flex items-center gap-3"> 
 
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10"> 
                  📍 
                </div> 
 
                <div> 
                  <p className="text-xs text-slate-500"> 
                    YOUR LOCATION 
                  </p> 
 
                  <p className="text-sm font-medium"> 
                    Location detected 
                  </p> 
 
                  <p className="text-xs text-slate-600"> 
                    GPS coordinates will be shared 
                  </p> 
                </div> 
 
              </div> 
 
            </div> 
 
 
            {/* Emergency Button */} 
            <button 
              onClick={requestEmergency} 
              disabled={emergency} 
              className="mt-6 w-full rounded-xl bg-red-600 py-4 font-bold transition hover:bg-red-500 disabled:cursor-not-allowed disabled:bg-red-900" 
            > 
              {emergency 
                ? "EMERGENCY REQUEST SENT" 
                : "REQUEST EMERGENCY HELP"} 
            </button> 
 
          </div> 
 
 
          {/* Map */} 
          <div className="relative min-h-[450px] overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 lg:col-span-2"> 
 
            {/* Fake Map */} 
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1e293b_1px,transparent_1px)] [background-size:30px_30px]"> 
 
              {/* Roads */} 
              <div className="absolute left-1/2 top-0 h-full w-10 -translate-x-1/2 bg-slate-800"></div> 
 
              <div className="absolute left-0 top-1/2 h-10 w-full -translate-y-1/2 bg-slate-800"></div> 
 
              <div className="absolute left-0 top-1/3 h-6 w-full rotate-12 bg-slate-800"></div> 
 
            </div> 
 
 
            {/* Map Label */} 
            <div className="absolute left-5 top-5 rounded-lg bg-slate-950/90 px-4 py-3 backdrop-blur"> 
 
              <p className="text-xs text-slate-500"> 
                LIVE LOCATION 
              </p> 
 
              <p className="mt-1 text-sm font-medium"> 
                Your current position 
              </p> 
 
            </div> 
 
 
            {/* User Location */} 
            <div className="absolute left-1/2 top-1/2"> 
 
              <div className="relative"> 
 
                <div className="absolute -inset-6 animate-ping rounded-full bg-blue-500/20"></div> 
 
                <div className="relative flex h-8 w-8 items-center justify-center rounded-full border-4 border-white bg-blue-600 shadow-xl"> 
                  <div className="h-2 w-2 rounded-full bg-white"></div> 
                </div> 
 
              </div> 
 
            </div> 
 
 
            {/* Ambulance */} 
            {emergency && ( 
 
              <div className="absolute left-[65%] top-[35%]"> 
 
                <div className="rounded-lg bg-red-600 px-3 py-2 text-xs font-bold shadow-lg"> 
                  🚑 8 min 
                </div> 
 
                <div className="mx-auto mt-1 h-3 w-3 rounded-full bg-red-500"></div> 
 
              </div> 
 
            )} 
 
 
            {/* Bottom Status */} 
            <div className="absolute bottom-5 left-5 right-5"> 
 
              <div className="rounded-xl border border-slate-700 bg-slate-950/90 p-4 backdrop-blur"> 
 
                {!emergency ? ( 
 
                  <div className="flex items-center justify-between"> 
 
                    <div> 
                      <p className="font-medium"> 
                        Ready for emergency request 
                      </p> 
 
                      <p className="text-xs text-slate-500"> 
                        Your location is available 
                      </p> 
                    </div> 
 
                    <div className="rounded-full bg-green-500/10 px-3 py-1 text-xs text-green-400"> 
                      GPS ACTIVE 
                    </div> 
 
                  </div> 
 
                ) : ( 
 
                  <div> 
 
                    <div className="flex items-center justify-between"> 
 
                      <div> 
                        <p className="font-medium text-red-400"> 
                          Emergency response activated 
                        </p> 
 
                        <p className="text-xs text-slate-500"> 
                          Searching for nearest ambulance... 
                        </p> 
                      </div> 
 
                      <div className="text-right"> 
                        <p className="text-xl font-bold"> 
                          8 min 
                        </p> 
 
                        <p className="text-xs text-slate-500"> 
                          estimated arrival 
                        </p> 
                      </div> 
 
                    </div> 
 
                  </div> 
 
                )} 
 
              </div> 
 
            </div> 
 
          </div> 
 
        </div> 
 
 
        {/* Bottom Cards */} 
        <div className="mt-6 grid gap-6 md:grid-cols-3"> 
 
          <InfoCard 
            title="Automatic Location" 
            value="GPS Enabled" 
            description="Your coordinates are automatically attached to the emergency request." 
            icon="📍" 
          /> 
 
          <InfoCard 
            title="Nearest Response" 
            value="2.4 km" 
            description="The system searches available emergency vehicles near you." 
            icon="🚑" 
          /> 
 
          <InfoCard 
            title="Live Tracking" 
            value="Available" 
            description="Track the response vehicle after your request is accepted." 
            icon="📡" 
          /> 
 
        </div> 
 
      </main> 
 
    </div> 
  ); 
} 
 
 
function InfoCard({ title, value, description, icon }) { 
  return ( 
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5"> 
 
      <div className="flex items-start justify-between"> 
 
        <div> 
          <p className="text-sm text-slate-500"> 
            {title} 
          </p> 
 
          <p className="mt-1 text-lg font-semibold"> 
            {value} 
          </p> 
        </div> 
 
        <div className="text-xl"> 
          {icon} 
        </div> 
 
      </div> 
 
      <p className="mt-3 text-sm leading-6 text-slate-500"> 
        {description} 
      </p> 
 
    </div> 
  ); 
} 