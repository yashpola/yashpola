const MoviePosts = {
  Suits: {
    thumbnail: "https://flxt.tmsimg.com/assets/p8630071_b_v13_bf.jpg",
    name: "Suits",
    title:
      "Suits (2012) | Aaron Korsh | Gabriel Macht, Patrick Adams, Rick Hoffman, Gina Torres",
    quote:
      "Sometimes I like to hang out with people who aren't that bright. You know, just to see how the other half lives.",
    thoughts: `What I love about Suits is that it does swimmingly well at hooking you onto it. While definitely not close to 
               legally accurate, its an extremely stylish show with witty characters, compelling music choices, and 
               palpable drama. It is often rightfully criticized
               that the show veered away from being an episodic case-of-the-week legal drama into more melodramatic, tired, 
               season-long story arcs that often compromised depth of character. However, I feel that theoretically this is as valid a choice as remaining a raw legal drama. 
               It is after all not easy to make a show that is as entertaining as Suits is, and also stay true to the
               endless drudgery and waiting-game that real life law is. A more personal gripe I had with the show though is that 
               the way several characters act would very quickly make them social pariahs in real life. Something I 
               deeply enjoyed while watching Mad Men which I wished Suits had was the very concrete portrayal of characters, in 
               ways that open up meaningful discussion about how the characters drove the plot and vice versa. However, 
               I do credit that the emotional development of the initially narcisstic and stoic Harvey Specter (Gabriel Macht), 
               is redemptive. While it could be argued that Specter still remained seemingly all-powerful and needlessly
               aggressive to the end, the portrayal of his deeply-embedded issues with his 
               family were biting. All in all, while Suits may not hold up well with time, 
               nicely enough it stays relatively clear from becoming a chore to watch especially having spanned nearly 10 seasons. 
               One doesn't regret watching Suits in my opinion.`,
    rating: "7/10",
    trivia: `Gabriel Macht's father (Stephen Macht) and wife (Jacinda Barett), and Patrick Adam's wife (Troian Bellisario) 
            appear in the show in significant roles.`,
    recommendations: "Billions, Blacklist, White Collar",
  },
  MadMen: {
    thumbnail:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBERERcREhIQGBISEBcYERcSFxIRFxISFxgYGBgTFxgbISwkGx0pHhcXJTYlKS8wMzQzGiI5PjkxPSwyMzIBCwsLEA4QHRISHTIpJCk5PTYzOzs0PTI7OTI5PTo0MjI7MjIyMjIyNDIyPTI7OzIyPTQyOz0yMDIyMjI7MjIyMv/AABEIARMAtwMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAQIDBQYHBAj/xABHEAACAQIDBAYECggEBwEAAAABAgADEQQSIQUGMUEHEyJRYXEygZGhFDM1QlJzdJKxsjRDcoKis8HCI2KD8BckJVSj0+EI/8QAGgEBAAIDAQAAAAAAAAAAAAAAAAMEAQIFBv/EADMRAQABAwEFBQcDBQEAAAAAAAABAgMRBAUSITFBIlFhgaETkbHB0eHwFEJxFTIzkrIG/9oADAMBAAIRAxEAPwDskSYgREmIERJiBESYgREmIERJiBESYgREmRASJMiAiIgIiICIiBVERAREQEREBERAREQEREBERASJMiAkREBERAREQERECqIiAiIgIiICIiAiIgIiICIkQERECIiICIiAiIgIiIFUREBERAREQEREBERAREQEiIgJERAREQEREBERAREQKoiICIiAiIgIiICIiAkREBIiICIiAiIgIiICIiAiIgVREQEREBERAREQEiIgJEmRAREQEREBERAREQEREBEiIFcREBERAREQEiIgIiRAREQEREBERAREQERIvASLxeUkwJJiUkxAvxEQEREBIiICIkQEREBERAREQEREBIi8i8BeQTIJkEwBMgmQTKSYEkxLZMQPdERAShmAFyQABck6ADvlU0Ppj2scNspkUkPiqi0bjiEILv6iqFf3oGnb/wDSbUqM2HwFQpQVsr1qZs9YjiKbcUT/ADDU24gcdCwW+G0KDZqWLxSnnmqPUBPeVclSfVMBc2tyv75EDsG4/SrXNdaG0HR6dVgq1sqo1JzwL5QFKX0JsLceE7TPjqkRfXnpPp/o62g+K2Vh6tQkuEamxOpbqnamGJ7yEBPjA2aIiAiIgIiReAkXi8pJgSTKSYJlJMCSZSTIJlBaBJMpJkEygtAqLRLRaIGWkREBOO//AKAqtlwafNLV2P7SikB7mM7DOadOmzzU2fTrqLnD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",
    name: "Mad Men",
    title:
      "Mad Men (2007) | Matthew Weiner | Jon Hamm, John Slattery, Elizabeth Moss",
    quote: "I hope she knows you only like the beginning of things",
    thoughts: `Mad Men is perhaps one of the greatest examples of character-driven television, and I say that quite 
            confidently. The lows are fairly slow, but the highs are brilliant payoffs that kept me on the edge 
            especially since I could buy into them a lot more. For example, a simple truth that Mad Men followed about 
            people is that they can go through a million little things (a lot of them being the same thing in different forms) 
            and still not really change in a big way. As such, every single action and reaction of characters that
            did affect them became that much more poignant to me, because I know that little change they felt came after
            a lot of tension and anticipation. Mad Men is honestly a plotless show despite skirting the edges of 
            so much palpable drama, and it is deeply satisfying seeing a show succeed while rigidly refraining from the temptation of 
            latching onto any available character drama at the cost of the wider arcs of the characters. As an aside, the whiplash 
            of watching a show set in the 60s actually embrace the racism, antisemitisim, and especially sexim of its time is possibly jarring. 
            The typewriter being introduced in the pilot as made for men but simple enough for a woman to use, comes to mind. 
            However, I suppose it is more respectful that the show doesn't sanitize its setting, especially since the 60s are 
            already so romanticized. The brutality of bigotry portrayed emboldens the very relevant question of who exactly was that period 
            the "good old days" for? Back to my original point though, Mad Men is a POV show that elected artfully insightful characters
            to "POV" from, and I feel it wins because it trusts its slow-burn character development enough to entertain viewers without 
            needing theatrics. And of course, the ad pitches in this show done by Don Draper are reason enough to watch the show. If you 
            liked Mad Men, I'd like to buy you a coke.`,
    rating: "9/10",
    trivia:
      "John Slattery was slated to play Don Draper before being casted for the character of Roger Sterling instead",
    recommendations: "Better Call Saul, Succession, The Sopranos",
  },
  BreakingBad: {
    title:
      "Breaking Bad (2008) | Vince Gilligan, Peter Gould | Bryan Cranston, Aaron Paul, Anna Gunn",
  },
};

export default MoviePosts;
