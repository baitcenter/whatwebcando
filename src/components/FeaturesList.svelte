<script>
  import features from '../data/features'
  import groups from '../data/groups'

  groups.forEach(group => {
    group.resolvedFeatures = group.features.map(feature => {
      const fullFeature = features.find(f => f.id === feature.id)
      fullFeature.icon = feature.icon
      return fullFeature
    })
  })

</script>

<style type="text/scss">
  .features-list-container {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: space-between;
    margin-top: 1em;
  }

  section {
    width: 100%;
    margin-bottom: 1em;
    padding: 2em;
    border: 1px solid var(--primary-border);
    background-color: #fff;
    border-radius: 10px;
  }

  h3 {
    font-size: 1.375em;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    display: flex;
    justify-content: space-between;
    padding: .5em 0;

    .mdi {
      margin-right: .5em;
    }
  }

  .legend {
    div {
      display: flex;
    }

    dt {
      min-width: 65px;
    }
    dd {
      margin-left: 0;
    }
  }
  
  .support {
    text-transform: uppercase;
    font-weight: bold;
    white-space: nowrap;
  }

  .support-no {
    color: #A81039;
  }
  .support-yes .mdi {
    color: #4caf50;
  }

  @media screen and (min-width: 1024px) {
    section {
      width: unset;
      min-width: 16em;
    }
  }

  @media screen and (min-width: 1440px) {
    section {
      min-width: 24em;
    }
  }
</style>

<dl class="legend" aria-hidden="true">
  <div>
    <dt class="support support-yes">Yes <i class="mdi mdi-check"></i></dt>
      <dd>Feature available in your current browser</dd>
  </div>
  <div>
    <dt class="support support-no">No <i class="mdi mdi-cross"></i></dt>
      <dd>Feature not available in your current browser</dd>
  </div>
</dl>

<div class="features-list-container">
  {#each groups as group}
  <section>
    <h3>{group.heading}</h3>

    <ul>
      {#each group.resolvedFeatures as feature}
      <li>
        <span><i class="mdi {feature.icon}"></i> <a rel="prefetch" href="/{feature.id}.html">{feature.name}</a></span>
        {#await feature.determineIsSupported() then isSupported}
          {#if isSupported}
            <span class="support support-yes">Yes <i class="mdi mdi-check"></i></span>
          {:else}
            <span class="support support-no">No <i class="mdi mdi-cross"></i></span>
          {/if}
        {/await}
      </li>
      {/each}
    </ul>
  </section>
  {/each}
</div>
