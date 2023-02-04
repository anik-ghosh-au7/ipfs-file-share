const IPFS = require('ipfs');
const node = new IPFS();

node.once('ready', () => {
	console.log('IPFS node is ready!');

	// Add a file to IPFS
	node.files.add(Buffer.from('Hello IPFS'), (err, files) => {
		if (err) {
			console.error(err);
		} else {
			console.log('File hash:', files[0].hash);

			// Get the contents of the file from IPFS
			node.files.cat(files[0].hash, (err, data) => {
				if (err) {
					console.error(err);
				} else {
					console.log('File contents:', data.toString());
				}
			});
		}
	});
});
