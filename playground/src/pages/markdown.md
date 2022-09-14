---
title: markdown as component
---

Support markdown as `component`

```typescript
const foo = '123'
```

<div text-center>
  <button
    class="btn m-3 text-sm mt-8"
    @click="router.back()"
  >
    Back
  </button>
</div>

<script setup lang="ts">
import {useRouter} from 'vue-router'

const router = useRouter()
</script>
