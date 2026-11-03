import { assertEquals } from "$std/assert/mod.ts";
import { handler } from "../routes/[slug].tsx";
import { createClassroom, validSlug } from "../utils/classroomStore.ts";
import { encryptPersonal, personalKeys } from "../utils/personalCrypto.ts";
import { personalDefaults } from "../utils/personalClient.ts";
import { personalStore } from "../utils/personalStore.ts";

Deno.test("School routes dispatch private and classroom rooms while preserving reserved addresses", async () => {
  const directory = await Deno.makeTempDir({
    prefix: "school-private-route-test-",
  });
  Deno.env.set("CLASSROOM_DATA_DIR", directory);
  assertEquals(validSlug("opencode"), false);
  const slug = "privatprobe", salt = "d".repeat(32);
  const keys = await personalKeys("SchoolTest!Password2026", slug, salt);
  const cipher = await encryptPersonal(keys.key, slug, "index", {
    version: 1,
    settings: personalDefaults(),
    chats: [],
    active: "",
  });
  (await personalStore()).create(slug, salt, keys.auth, cipher);
  await createClassroom(
    "klassenprobe",
    "SchoolTest!Password2026",
    "openrouter",
    "synthetic-only-key",
  );
  const visit = async (name: string) =>
    await handler.GET!(
      new Request(`https://school.bud-e.ai/${name}`),
      {
        params: { slug: name },
        render: (data: unknown) => Response.json(data),
      } as never,
    );
  assertEquals((await (await visit(slug)).json()).personal, true);
  assertEquals((await (await visit("klassenprobe")).json()).personal, false);
  assertEquals((await visit("missingroom")).status, 404);
  assertEquals((await visit("opencode")).status, 404);
});
