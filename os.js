// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: pink; icon-glyph: archive;
/*
The 'os' module from node.js, ported to Scriptable.
Made by Rhinozz.
Based off of the 'os' module: https://nodejs.org/api/os.html

Constants:
- EOL
End of line character.
- constants
OS constants - does not work.

Functions:
- arch()
Get CPU architecture.
- cpus()
Get details of CPU cores - not great, very hacky.
- endianness()
Get CPU endianness.
- freemem()
Get free memory - does not work.
- getPriority(pid)
Get priority of item by PID - does not work.
- homedir()
Get the home directory.
- hostname()
Get device name.
- loadavg()
Get load averages - Unix-specific, set to [0, 0, 0] for non-Unix
- networkInterfaces()
Get internet connections - does not return IPs besides 127.0.0.1, basically unusable
- platform()
Get OS platform.
- release()
Get OS release version.
- setPriority(pid, priority)
Set prioriry of item by PID - does not work.
- tmpdir()
Get the temporary directory.
- totalmem()
Get total device memory - not great, very hacky.
- type()
Get OS kernel type.
- uptime()
Get OS uptime - does not work.
- userInfo(options)
Get user and device info.
- version()
Get kernel version.

Feel free to add or optimize!
*/

/*
To use these conmands, import this module:

const { os } = importModule('os.js');

Then use os like you normally would.
*/

module.exports = {
    EOL: "\\n",
    
    arch: function() {
        return("arm64");
    },
    
    constants: "error: no constants are available for use in scriptable",
    
    cpus: function() {
        let scale = Device.screenResolution();
        let added = (parseInt(scale.height) + parseInt(scale.width)).toString();

        var cpudict = {
            "1776": "Apple Fusion//n|2340|4",
            "2084": "2084|",
            "2620": "Apple Lightning or Apple Vortex/Apple Thunder or Apple Tempest/2:4|2650 or 2400/1800 or 1590|6",
            "3000": "3000|",
            "3561": "Apple Monsoon, Apple Vortex, Apple Lightning, or Apple Firestorm/Apple Mistral, Apple Tempest, Apple Thunder, or Apple Icestorm/2:4|2390, 2400, 2650, or 3100/1420, 1590, 1800, or 1800|6",
            "3584": "3584|",
            "3702": "Apple Firestorm/Apple Icestorm/2:4|3100/1800|6",
            "3780": "Apple Twister or Apple Fusion//n|1850 or 2310|2",
            "3892": "Apple Twister//n|2160|2",
            "3930": "",
            "4000": "Apple Firestorm/Apple Icestorm/2:4|3100/1800|6",
            "4056": "Apple Lightning or Apple Vortex/Apple Thunder or Apple Tempest/2:4|2650 or 2400/1800 or 1590|6",
            "4062": "Apple Firestorm/Apple Icestorm/2:4|3100/1800|6",
            "4780": "4780|"
        }
        
        let cpuform = cpudict[added].split('|');
        let coresplit = cpuform[0].split('/');
        let speedsplit = cpuform[1].split('/');
        let numcount = 0;
        let core = "";
        let speed = "";
        
        var res = "[ ";
        if(cpuform[0] === "4780") {
            res = `[ { model: Apple Twister, Apple Hurricane, or Apple Vortex,
    speed: 2160, 2340, or 2490,
    times: 'unknown' },
  { model: Apple Twister, Apple Hurricane, or Apple Vortex,
    speed: 2160, 2340, or 2490,
    times: 'unknown' },
  { model: Apple Hurricane or Apple Vortex,
    speed: 2340 or 2490,
    times: 'unknown' },
  { model: Apple Zephyr or Apple Vortex,
    speed: 1050 or 2490,
    times: 'unknown' },
  { model: Apple Zephyr or Apple Tempest,
    speed: 1050 or 1590,
    times: 'unknown' },
  { model: Apple Zephyr or Apple Tempest,
    speed: 1050 or 1590,
    times: 'unknown' },
  { model: Apple Tempest,
    speed: 1590,
    times: 'unknown' },
  { model: Apple Tempest,
    speed: 1590,
    times: 'unknown' } ]`;    
        } else if(cpuform[0] === "2084") {
            res = `[ { model: Apple Twister, Apple Fusion, or Apple Monsoon,
    speed: 1850, 2340, or 2390,
    times: 'unknown' },
    model: Apple Twister, Apple Fusion, or Apple Monsoon,
    speed: 1850, 2340, or 2390,
    times: 'unknown' },
  { model: Apple Mistral,
    speed: 1420,
    times: 'unknown' },
  { model: Apple Mistral,
    speed: 1420,
    times: 'unknown' },
  { model: Apple Mistral,
    speed: 1420,
    times: 'unknown' },
  { model: Apple Mistral,
    speed: 1420,
    times: 'unknown' } ]`;
        } else if(cpuform[0] === "3000") {
            res = `[ { model: Apple Twister, Apple Fusion, Apple Monsoon, or Apple Lightning,
    speed: 1850, 2340, 2390, or 2650,
    times: 'unknown' },
  { model: Apple Twister, Apple Fusion, Apple Monsoon, or Apple Lightning,
    speed: 1850, 2340, 2390, or 2650,
    times: 'unknown' },
  { model: Apple Thunder or Apple Mistral,
    speed: 1800 or 1420,
    times: 'unknown' },
  { model: Apple Thunder or Apple Mistral,
    speed: 1800 or 1420,
    times: 'unknown' },
  { model: Apple Thunder or Apple Mistral,
    speed: 1800 or 1420,
    times: 'unknown' },
  { model: Apple Thunder or Apple Mistral,
    speed: 1800 or 1420,
    times: 'unknown' } ]`;
        } else if(cpuform[0] === "3584") {
            res = `[ { model: Apple Fusion, Apple Typhoon, or Apple Vortex,
    speed: 2340, 2390, or 2490,
    times: 'unknown' },
    model: Apple Fusion, Apple Typhoon, or Apple Vortex,
    speed: 2340, 2390, or 2490,
    times: 'unknown' },
  { model: Apple Tempest,
    speed: 1590,
    times: 'unknown' },
  { model: Apple Tempest,
    speed: 1590,
    times: 'unknown' },
  { model: Apple Tempest,
    speed: 1590,
    times: 'unknown' },
  { model: Apple Tempest,
    speed: 1590,
    times: 'unknown' } ]`;
        } else {
            for(var i = 0; i < parseInt(cpuform[2]); i++) {
                if(coresplit[2] != "n") {
                    if(numcount < coresplit[2].split(':')[0]) {
                        numcount++;
                        core = coresplit[0];
                        speed = speedsplit[0];
                    } else {
                        numcount++;
                        core = coresplit[1];
                        speed = speedsplit[1];
                    }
                } else {
                    core = coresplit[0];
                    speed = speedsplit[0];
                }
                    
                res += `{ model: '${core}',\n    speed: ${speed},\n    times: 'unknown' },\n  `
            }
            
            res = res.slice(0, -4) + " ]";
        }
        
        return(res);
    },
    
    endianness: function() {
        return("LE");
    },
    
    freemem: function() {
        return("error: it is not possible to get the amount of free device memory");
    },
    
    getPriority: function() {
        return("error: it is not possible to get the priority of tasks");
    },
    
    homeDir: function() {
        return(FileManager.local().documentsDirectory());
    },
    
    hostname: function() {
        return(Device.name());
    },
    
    loadavg: function() {
        return('[0, 0, 0]');
    },
    
    networkInterfaces: function() {
        return(`{ 'Wi-Fi':
    [ { address: 'unknown',
        netmask: 'unknown',
        family: 'IPv6',
        mac: 'unknown',
        scopeid: 'unknown',
        internal: false,
        cidr: 'unknown' },
    [ { address: 'unknown',
        netmask: 'unknown',
        family: 'IPv4',
        mac: 'unknown',,
        internal: false,
        cidr: 'unknown' },
  'Loopback Pseudo-Interface 1':
    [ { address: '::1',
        netmask: 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff',
        family: 'IPv6',
        mac: '00:00:00:00:00:00',
        scopeid: 0,
        internal: true,
        cidr: '::1/128' },
      { address: '127.0.0.1',
        netmask: '255.0.0.0',
        family: 'IPv4',
        mac: '00:00:00:00:00:00',
        internal: true,
        cidr: '127.0.0.1/8' } ] }`)
    },
    
    platform: function() {
        return("darwin");
    },
    
    release: function() {
        return(Device.systemVersion());
    },
    
    setPriority: function() {
        return("error: it is not possible to set the priority of tasks");
    },
    
    tmpdir: function() {
        return(FileManager.local().temporaryDirectory());
    },
    
    totalmem: function() {
        let scale = Device.screenResolution();
        let added = (parseInt(scale.height) + parseInt(scale.width)).toString();
        var memdict = {
            "1776": "2000000000",
            "2084": "2000000000",
            "2620": "3000000000 or 4000000000",
            "3000": "2000000000 or 3000000000",
            "3561": "3000000000 or 4000000000",
            "3584": "2000000000 or 3000000000",
            "3702": "4000000000 or 6000000000",
            "3780": "2000000000",
            "3892": "2000000000",
            "3930": "4000000000",
            "4000": "4000000000",
            "4056": "4000000000 or 6000000000",
            "4062": "6000000000",
            "4780": "4000000000 or 6000000000"
        }
        
        return(memdict[added]);
    },
    
    type: function() {
        return("Darwin");
    },
    
    uptime: function() {
        return("error: it is not possible to get the system uptime");
    },
    
    userInfo: function(options) {    
        let name = Device.name();
        let home = FileManager.local().documentsDirectory();
    
        if(options != null) {
            if(options.encoding == null) {
                return("error: encoding not found");    
            }
            
            if(options.encoding == 'buffer') {
                name = `<Buffer ${Array.from(name).map(c => c.charCodeAt(0) < 128 ? c.charCodeAt(0).toString(16): encodeURIComponent(c).replace(/\%/g,'').toLowerCase()).join('').match(/.{1,2}/g).join(" ")}>`    
                
                home = `<Buffer ${Array.from(home).map(c => c.charCodeAt(0) < 128 ? c.charCodeAt(0).toString(16): encodeURIComponent(c).replace(/\%/g,'').toLowerCase()).join('').match(/.{1,2}/g).join(" ")}>`
            } else if(options.encoding == 'utf8') {
            } else {
                return(`error: '${options.encoding}' is not a valid encoding. possible values: buffer, utf8`);
            }
        }
        return(`uid: -1
gid: -1
username: ${name}
homedir: ${home}
shell: null`);
    },
    
    version: function() {
        return(`${Device.model()}; CPU ${Device.model()} OS ${Device.systemVersion().replace('.', '_')} like Mac OS X`)
    },
};