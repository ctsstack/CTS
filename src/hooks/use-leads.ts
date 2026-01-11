import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api, buildUrl, type CreateLeadInput, type UpdateRoleInput } from "@shared/routes";

export function useCreateLead() {
  return useMutation({
    mutationFn: async (data: CreateLeadInput) => {
      const res = await fetch(api.leads.create.path, {
        method: api.leads.create.method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        if (res.status === 409) throw new Error("This email is already registered.");
        if (res.status === 400) throw new Error("Invalid email address.");
        throw new Error("Something went wrong. Please try again.");
      }

      return api.leads.create.responses[201].parse(await res.json());
    },
  });
}

export function useUpdateLeadRole() {
  return useMutation({
    mutationFn: async ({ id, roleTag }: { id: number } & UpdateRoleInput) => {
      const url = buildUrl(api.leads.updateRole.path, { id });
      const res = await fetch(url, {
        method: api.leads.updateRole.method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ roleTag }),
      });

      if (!res.ok) {
        throw new Error("Failed to update role preference.");
      }

      return api.leads.updateRole.responses[200].parse(await res.json());
    },
  });
}
