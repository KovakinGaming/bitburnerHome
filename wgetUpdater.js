/** @param {NS} ns */
//Update all of Ero98's scripts from the Github, do note this has to be updated if any files are moved or new ones are created
export async function main(ns) {

    //Update the hack folder
    ns.wget('https://raw.githubusercontent.com/Ero98/bitburnerHome/main/hack/hack-node.js', 'hack/hack-node.js'); // The only script directly in the Hack folder

        // Update the bat subfolder within hack
        ns.wget('https://raw.githubusercontent.com/Ero98/bitburnerHome/main/hack/bat/allocator.js', 'hack/bat/allocator.js');
        ns.wget('https://raw.githubusercontent.com/Ero98/bitburnerHome/main/hack/bat/auto-grow.js', 'hack/bat/auto-grow.js');
        ns.wget('https://raw.githubusercontent.com/Ero98/bitburnerHome/main/hack/bat/config.js', 'hack/bat/config.js');
        ns.wget('https://raw.githubusercontent.com/Ero98/bitburnerHome/main/hack/bat/exec-multi.js', 'hack/bat/exec-multi.js');
        ns.wget('https://raw.githubusercontent.com/Ero98/bitburnerHome/main/hack/bat/formulas.js', 'hack/bat/formulas.js');
        ns.wget('https://raw.githubusercontent.com/Ero98/bitburnerHome/main/hack/bat/masterV3.js', 'hack/bat/masterV3.js'); // Update the master script
        // ns.wget('https://raw.githubusercontent.com/Ero98/bitburnerHome/main/hack/bat/readme.txt', 'hack/bat/readme.txt') //Random readme saying 'Batch hack Runner'
        ns.wget('https://raw.githubusercontent.com/Ero98/bitburnerHome/main/hack/bat/schedule.js', 'hack/bat/schedule.js');
        ns.wget('https://raw.githubusercontent.com/Ero98/bitburnerHome/main/hack/bat/select-server.js', 'hack/bat/select-server.js');

            // Update the action subfolder within bat
            ns.wget('https://raw.githubusercontent.com/Ero98/bitburnerHome/main/hack/bat/action/do-grow.js', 'hack/bat/action/do-grow.js');
            ns.wget('https://raw.githubusercontent.com/Ero98/bitburnerHome/main/hack/bat/action/do-hack.js', 'hack/bat/action/do-hack.js');
            // Unsure why there are two identical do-weaken.js scripts
            ns.wget('https://raw.githubusercontent.com/Ero98/bitburnerHome/main/hack/bat/action/do-weaken1.js', 'hack/bat/action/do-weaken1.js');
            ns.wget('https://raw.githubusercontent.com/Ero98/bitburnerHome/main/hack/bat/action/do-weaken2.js', 'hack/bat/action/do-weaken2.js');

            // Update the only file within the prepare subfolder
            ns.wget('https://raw.githubusercontent.com/Ero98/bitburnerHome/main/hack/bat/prepare/grow.js', 'hack/bat/prepare/grow.js');

    // Update the lib folder
    ns.wget('https://raw.githubusercontent.com/Ero98/bitburnerHome/main/lib/arguments.js', 'lib/arguments.js');
    ns.wget('https://raw.githubusercontent.com/Ero98/bitburnerHome/main/lib/calculations.js', 'lib/calculations.js');
    ns.wget('https://raw.githubusercontent.com/Ero98/bitburnerHome/main/lib/files.js', 'lib/files.js')

    // Update the ownserver folder
    ns.wget('https://raw.githubusercontent.com/Ero98/bitburnerHome/main/ownserver/add.js', 'ownserver/add.js');
    ns.wget('https://raw.githubusercontent.com/Ero98/bitburnerHome/main/ownserver/getUpgradeCost.js', 'ownserver/getUpgradeCost.js');
    ns.wget('https://raw.githubusercontent.com/Ero98/bitburnerHome/main/ownserver/printLimit.js', 'ownserver/printLimit.js');
    ns.wget('https://raw.githubusercontent.com/Ero98/bitburnerHome/main/ownserver/show.js', 'ownserver/show.js');
    ns.wget('https://raw.githubusercontent.com/Ero98/bitburnerHome/main/ownserver/upgrade.js', 'ownserver/upgrade.js');

    // Update the tools folder
    ns.wget('https://raw.githubusercontent.com/Ero98/bitburnerHome/main/tools/autonuke.js', 'tools/autonuke.js');
    ns.wget('https://raw.githubusercontent.com/Ero98/bitburnerHome/main/tools/mv.js', 'tools/ms.js');
    ns.wget('https://raw.githubusercontent.com/Ero98/bitburnerHome/main/tools/rm.js', 'tools/rm.js');
    ns.wget('https://raw.githubusercontent.com/Ero98/bitburnerHome/main/tools/scp.js', 'tools/scp.js');

    // Kill the currently running script and run the newly updated script collection
    ns.spawn('hack/bat/masterV3.js') 
}
