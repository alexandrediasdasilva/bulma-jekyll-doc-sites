---
title: Ceci est le titre de l'article
featured: true

---
## Texte et police

### Texte normal
<div class="message">
<div class="message-body">
ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz
</div>
</div>

### Code
```
<div class="highlight">
  <pre><code class="language-ruby" data-lang="ruby"><span class="k">def</span> <span class="nf">foo</span>
  <span class="nb">puts</span> <span class="s1">&#39;foo&#39;</span>
<span class="k">end</span></code></pre></div>
```

---

## Titres

<div class="message">
<div class="message-body">
{{
"# Titre 1
## Titre 2
### Titre 3
#### Titre 4
##### Titre 5
###### Titre 6"
| markdownify }}
</div>
</div>

---

## Styles

Le texte peut être mis en **gras**, *italique*, ou ~~barré~~.

[Lien vers une autre page]({% link _articles/qu-est-ce-que-slack.md %})
[Lien Mardown](_articles/qu-est-ce-que-slack.md)

---

## Listes

### Liste à puces
- **Item 1.** Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati officiis accusantium iusto aperiam! Minus assumenda molestias delectus qui vero repudiandae eius modi tempore maxime? Provident cumque aliquam earum nisi dignissimos.
- **Item 2.** Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati officiis accusantium iusto aperiam! Minus assumenda molestias delectus qui vero repudiandae eius modi tempore maxime? Provident cumque aliquam earum nisi dignissimos.
- **Item 3.** Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati officiis accusantium iusto aperiam! Minus assumenda molestias delectus qui vero repudiandae eius modi tempore maxime? Provident cumque aliquam earum nisi dignissimos.

### Liste numérotée
1. **Item 1**. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati officiis accusantium iusto aperiam! Minus assumenda molestias delectus qui vero repudiandae eius modi tempore maxime? Provident cumque aliquam earum nisi dignissimos.
2. **Item 2**. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati officiis accusantium iusto aperiam! Minus assumenda molestias delectus qui vero repudiandae eius modi tempore maxime? Provident cumque aliquam earum nisi dignissimos.
3. **Item 3**. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati officiis accusantium iusto aperiam! Minus assumenda molestias delectus qui vero repudiandae eius modi tempore maxime? Provident cumque aliquam earum nisi dignissimos.

## Encarts informatifs

{% include roles.html allowed="admin sup user" %}

{% include message.html type="info" content="
Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo at earum dolorem aut magnam debitis iusto necessitatibus unde eligendi tempore nulla, similique aliquid labore nisi consectetur fugit quos autem exercitationem officia corporis reprehenderit et illo harum doloremque! Reprehenderit dolorem consectetur magni eos amet temporibus, a unde molestias quia, laborum atque.
" %}

{% include message.html type="tip" content="
Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo at earum dolorem aut magnam debitis iusto necessitatibus unde eligendi tempore nulla, similique aliquid labore nisi consectetur fugit quos autem exercitationem officia corporis reprehenderit et illo harum doloremque! Reprehenderit dolorem consectetur magni eos amet temporibus, a unde molestias quia, laborum atque.
" %}

{% include message.html type="bug" content="
Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo at earum dolorem aut magnam debitis iusto necessitatibus unde eligendi tempore nulla, similique aliquid labore nisi consectetur fugit quos autem exercitationem officia corporis reprehenderit et illo harum doloremque! Reprehenderit dolorem consectetur magni eos amet temporibus, a unde molestias quia, laborum atque.
" %}

---

## Tableaux

| Colonne 1               | Colonne 2               | Colonne 3               |
| ----------------------- | ----------------------- | ----------------------- |
| Ligne 1 de la colonne 1 | Ligne 1 de la colonne 2 | Ligne 1 de la colonne 3 |
| Ligne 2 de la colonne 1 | Ligne 2 de la colonne 2 | Ligne 1 de la colonne 3 |
| Ligne 3 de la colonne 1 | Ligne 3 de la colonne 2 | Ligne 3 de la colonne 3 |

---

## Procédure

{% include instructions.html

1="Lorem ipsum dolor **sit amet consectetur**, adipisicing elit :
- Impedit obcaecati voluptatem recusandae
- Quaerat sapiente magni ipsa assumenda
- Aliquid facilis sequi.
"

2="Lorem ipsum dolor [sit amet consectetur](_articles/comprendre-comment-fonctionnent-les-actions-dans-slack.md), adipisicing elit. Impedit obcaecati voluptatem recusandae quaerat sapiente magni ipsa assumenda aliquid facilis sequi!"

3="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit obcaecati voluptatem recusandae quaerat sapiente magni ipsa assumenda aliquid facilis sequi!"

4="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit obcaecati voluptatem recusandae quaerat sapiente magni ipsa assumenda aliquid facilis sequi!"

%}