from django.shortcuts import render
from django.http import JsonResponse

from .cache import create_cache

# Imports the cache 
GENE_CACHE = create_cache()

# Returns a list of all the genes (returns the keys of the cache).
def find_all_genes(request):
	return JsonResponse({"genes":[*GENE_CACHE]})

# Returns the variants of a gene.
def find_all_variants(request):
	gene = request.GET.get("q")
	if gene in GENE_CACHE:
		return JsonResponse({"variants": GENE_CACHE[gene]})
	else:
		return JsonResponse({"error": "There are no variants for this gene"})