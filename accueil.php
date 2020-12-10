<div id="contenu">
	
	<article>
		<div class="text">
			<h1>Salutions</h1>
			<p>Welcome to my site! As you can see this a medical site made by me for you! <br>
			"Sue-Ellen Thomas, Jim Smith, Jane Brown and all of our guests, welcome.</p>
			<p>Thanks to the United Nations Universal Declaration of Human Rights we are aware of 'rights' in many spheres, including education. That 1948 agreement declared in Article 26 education should be compulsory and free for children. That goal, is as pertinent today as it was then. It's a goal I know we all share - the full development of every child. As a body Parents United recognizes good reading skills established in childhood as the foundation of fulfilling, and ongoing education.</p>

		</div>
		<div id="photo">
			<img src="flechegauche.png" id='flechegauche'>
			<img src="photos/medecine0.jpg" alt="photo du programs" id="photos">
			<img src="flechedroite.png" id='flechedroite'>
		</div>

		<div class="text">
			<p>
			We are honored to have Sue-Ellen Thomas, Jim Smith and Jane Brown with us today. All three are esteemed specialists in teaching young children to read. Sue-Ellen has worked for many years with educational authorities to establish programs that put in place the necessary pre-reading skills. Her efforts need no introduction. The results speak for themselves. Jim and Jane bring their passion and knowledge of how to reach those in our communities who are frequently overlooked or bypassed. Their work among English-as-a-second-language families has bridged gaps that were deep dark chasms.
			Prepare yourself to be challenged, excited and inspired.
			And before I handover to Lesley Watts, our coordinator for 'Readers by Right', who will outline the day's events, I want to say once more on behalf of the Parents United organizing committee, welcome. It's a pleasure to see so many of you here." </p>
		</div>
	</article>
	<aside>
		<?php
			$fichier=fopen('recent.txt', 'r+');
			$text='';
			while($ligne=fgets($fichier))
			{
				$text.=$ligne;
			}

			$titres=explode('#', $text);
			for($i=0; $i<sizeof($titres); $i++)
			{
				echo "<a class='recent' href='#?partie=blog&item=' id='p".$i."'>".$titres[$i]."</a>";
			}
			
		?>
						
	</aside>
					
</div>