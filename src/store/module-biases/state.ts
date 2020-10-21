import { StepItem } from "../../components/models";

export interface IBiasesState {
  biasList: StepItem[];
}

const state: IBiasesState = {
  biasList: [
    new StepItem(
      "anchor",
      "Anchoring",
      "The first thing you judge influences your judgment of all that follows.",
      "Human minds are associative in nature, so the order in which we receive information helps determine the course of our judgments and perceptions. For instance, the first price offered for a used car sets an ‘anchor’ price which will influence how reasonable or unreasonable a counter-offer might seem. Even if we feel like an initial price is far too high, it can make a slightly less-than-reasonable offer seem entirely reasonable in contrast to the anchor price.",
    ),
    new StepItem(
      "money_off",
      "The sunk cost fallacy",
      "You irrationally cling to things that have already cost you something.",
      "When we've invested our time, money, or emotion into something, it hurts us to let it go. This aversion to pain can distort our better judgment and cause us to make unwise investments. A sunk cost means that we can't recover it, so it's rational to disregard the cost when evaluating. For instance, if you've spent money on a meal but you only feel like eating half of it, it's irrational to continue to stuff your face just because 'you've already paid for it'; especially considering the fact that you're wasting actual time doing so.",
    ),
    new StepItem(
      "blur_on",
      "The availability heuristic",
      "Your judgments are influenced by what springs most easily to mind.",
      "How recent, emotionally powerful, or unusual your memories are can make them seem more relevant. This, in turn, can cause you to apply them too readily. For instance, when we see news reports about homicides, child abductions, and other terrible crimes it can make us believe that these events are much more common and threatening to us than is actually the case.",
    ),
    new StepItem(
      "school",
      "The curse of knowledge",
      "Once you understand something you presume it to be obvious to everyone.",
      "Things makes sense once they make sense, so it can be hard to remember why they didn't. We build complex networks of understanding and forget how intricate the path to our available knowledge really is. This bias is closely related to the hindsight bias wherein you will tend to believe that an event was predictable all along once it has occurred. We have difficulty reconstructing our own prior mental states of confusion and ignorance once we have clear knowledge.",
    ),
    new StepItem(
      "grading",
      "Confirmation bias",
      "You favor things that confirm your existing beliefs.",
      "We are primed to see and agree with ideas that fit our preconceptions, and to ignore and dismiss information that conflicts with them. You could say that this is the mother of all biases, as it affects so much of our thinking through motivated reasoning. To help counteract its influence we ought to presume ourselves wrong until proven right.",
    ),
    new StepItem(
      "multiline_chart",
      "The dunning-kruger effect",
      "The more you know, the less confident you're likely to be.",
      "Because experts know just how much they don't know, they tend to underestimate their ability; but it's easy to be over-confident when you have only a simple idea of how things are. Try not to mistake the cautiousness of experts as a lack of understanding, nor to give much credence to lay-people who appear confident but have only superficial knowledge.",
    ),
    new StepItem(
      "insights",
      "Belief bias",
      "If a conclusion supports your existing beliefs, you'll rationalize anything that supports it.",
      "It's difficult for us to set aside our existing beliefs to consider the true merits of an argument. In practice this means that our ideas become impervious to criticism, and are perpetually reinforced. Instead of thinking about our beliefs in terms of 'true or false' it's probably better to think of them in terms of probability. For example we might assign a 95%+ chance that thinking in terms of probability will help us think better, and a less than 1% chance that our existing beliefs have no room for any doubt. Thinking probabalistically forces us to evaluate more rationally.",
    ),
  ],
};

export default state;
