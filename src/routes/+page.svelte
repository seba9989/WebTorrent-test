<script lang="ts">
	import Player from '$lib/Player.svelte';
	import { onMount } from 'svelte';
	import type { WebTorrent as WT } from 'webtorrent';

	onMount(async () => {
		// @ts-expect-error
		const { default: WebTorrent }: { default: WT } = await import('webtorrent/dist/webtorrent.min');

		const client = new WebTorrent();
		const magnetURI =
			'magnet:?xt=urn:btih:RKNZJQMPEK34OIRVXYD32JE6C4R2FF6G&dn=%5BSubsPlease%5D%20Unnamed%20Memory%20-%2013%20%28480p%29%20%5B2FA15A02%5D.mkv&xl=383322776&tr=http%3A%2F%2Fnyaa.tracker.wf%3A7777%2Fannounce&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2710%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me%3A2710%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.cyberia.is%3A6969%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker3.itzmx.com%3A6961%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Fretracker.lanta-net.ru%3A2710%2Fannounce&tr=http%3A%2F%2Fopen.acgnxtracker.com%3A80%2Fannounce&tr=wss%3A%2F%2Ftracker.openwebtorrent.com';

		client.add(magnetURI, (torrent) => {
			// console.log('Client is downloading:', torrent.infoHash);
			for (const file of torrent.files) {
				document.body.append(file.name);
			}
			console.log('test');
		});

		setTimeout(() => console.log(client.downloadSpeed), 5000);

		// console.log(client);
	});
</script>

<Player></Player>
