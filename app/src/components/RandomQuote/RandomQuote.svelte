<script>
  import { quoteWrapper, quoteText } from './RandomQuoteStyles.js';
  const quotes = [
    {
      text: 'A despondent heart will always be defeated regardless of all skill.',
      author: 'Ringeck',
    },
  ];

  const { text, author } = quotes[Math.floor(Math.random() * quotes.length)];
</script>

<div class={quoteWrapper}>
  <p class={quoteText}>“{text}"</p>
  <div class={quoteText}>-{author}-</div>
</div>
